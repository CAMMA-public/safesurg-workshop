import { FormEvent, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const STORAGE_BUCKET = import.meta.env.VITE_SUPABASE_STORAGE_BUCKET || "abstract-pdfs";
const ABSTRACT_TEMPLATE_URL = `${import.meta.env.BASE_URL}Abstract-Submission-Template.docx`;

type FormState = {
  title: string;
  authors: string;
  contactEmail: string;
  presentingAuthorClinician: string;
  keyInformation: string;
  consentReview: boolean;
  consentPresent: boolean;
};

const initialFormState: FormState = {
  title: "",
  authors: "",
  contactEmail: "",
  presentingAuthorClinician: "",
  keyInformation: "",
  consentReview: false,
  consentPresent: false,
};

const sanitizeFileName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90) || "abstract.pdf";

const isPdfFile = (file: File) =>
  file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

const SubmitAbstract = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [feedbackModal, setFeedbackModal] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const isConfigured = useMemo(
    () => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && STORAGE_BUCKET),
    [],
  );

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess("");
  };

  const handleFileChange = (selectedFile: File | undefined) => {
    setError("");
    setSuccess("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!isPdfFile(selectedFile)) {
      setFile(null);
      setError("Please upload a PDF file.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setFile(null);
      setError("The PDF must be 10 MB or smaller.");
      return;
    }

    setFile(selectedFile);
  };

  const validate = () => {
    if (!isConfigured) return "Submission storage is not configured yet.";
    if (!form.title.trim()) return "Title is required.";
    if (!form.authors.trim()) return "Authors are required.";
    if (!form.contactEmail.trim()) return "Contact email is required.";
    if (!form.presentingAuthorClinician) return "Please indicate whether the first/presenting author is a clinician.";
    if (!form.keyInformation.trim()) return "Key information is required.";
    if (!file) return "Please upload your abstract PDF.";
    if (!form.consentReview || !form.consentPresent) return "Please confirm both consent statements.";
    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!file) return;

    setSubmitting(true);

    try {
      const submissionId = crypto.randomUUID();
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const fileName = `${timestamp}-${sanitizeFileName(file.name)}`;
      const filePath = `abstract-submissions/${submissionId}-${fileName}`;

      const uploadResponse = await fetch(
        `${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filePath}`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": file.type || "application/pdf",
            "x-upsert": "false",
          },
          body: file,
        },
      );

      if (!uploadResponse.ok) {
        const detail = await uploadResponse.text();
        throw new Error(detail || "PDF upload failed.");
      }

      const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/abstract_submissions`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          id: submissionId,
          email: form.contactEmail.trim(),
          title: form.title.trim(),
          authors: form.authors.trim(),
          contact_email: form.contactEmail.trim(),
          presenting_author_clinician: form.presentingAuthorClinician === "yes",
          key_information: form.keyInformation.trim(),
          pdf_path: filePath,
          pdf_filename: file.name,
          pdf_size_bytes: file.size,
          consent_review: form.consentReview,
          consent_present: form.consentPresent,
        }),
      });

      if (!insertResponse.ok) {
        const detail = await insertResponse.text();
        throw new Error(detail || "Submission metadata could not be saved.");
      }

      setSuccess("Your response has been received. Thank you.");
      setFeedbackModal({ type: "success", message: "Your response has been received. Thank you." });
      setForm(initialFormState);
      setFile(null);
      formElement.reset();
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Submission failed.";
      setError(message);
      setFeedbackModal({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F4F1EA]">
        <section className="relative overflow-hidden bg-primary px-6 pb-16 pt-28 md:px-8 md:pt-32 lg:px-16 xl:px-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(74,143,217,0.18),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(217,160,102,0.16),transparent_22%),linear-gradient(180deg,rgba(10,22,40,0.98),rgba(10,22,40,0.92))]" />
          <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full border border-[#4A8FD9]/12" />
          <div className="pointer-events-none absolute left-[10%] top-10 h-40 w-40 rounded-full border border-[#D9A066]/12" />

          <div className="relative mx-auto max-w-5xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 backdrop-blur-sm">
              MICCAI 2026 Satellite Event
            </span>
            <h1
              className="mt-6 max-w-4xl text-5xl leading-[0.95] text-[#F4F1EA] md:text-6xl"
              style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
            >
              <span className="text-[#F4F1EA]">Safe</span>
              <span
                className="mx-[-0.04em] inline-block text-[#D9A066]"
                style={{ fontWeight: 400 }}
                aria-hidden="true"
              >
                /
              </span>
              <span className="text-[#4A8FD9]">Surg</span>{" "}
              <span className="text-[#F4F1EA]">Abstract Submission</span>
            </h1>
            <div className="mt-6 max-w-4xl space-y-4 text-base leading-8" style={{ color: "rgba(244, 241, 234, 0.84)" }}>
              <p>
                SafeSurg invites abstracts on safety-relevant topics for a non-archival track. We encourage healthcare
                practitioners to submit early and promising clinical-oriented works and invite researchers to submit
                works that are previously published in peer-reviewed journals, offering a chance to bring these works to
                the wider community in a focused setting.
              </p>
              <p>
                Accepted abstracts will be presented as a poster during the workshop day. We will offer the opportunity
                for a 1 min teaser presentation as part of the workshop program, to advertise your poster. Abstracts
                should maintain a 600 word limit and follow this{" "}
                <a
                  href={ABSTRACT_TEMPLATE_URL}
                  download
                  className="font-medium text-[#F4F1EA] underline underline-offset-2 transition-colors hover:text-[#D9A066]"
                >
                  submission template
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-5xl pt-10">
          {!isConfigured && (
            <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              Supabase environment variables are missing. Add VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, and
              VITE_SUPABASE_STORAGE_BUCKET to enable submissions.
            </div>
          )}

          {success && (
            <div
              role="status"
              className="mt-4 flex items-start gap-3 rounded-lg border border-[#185FA5]/15 bg-white px-5 py-4 text-sm font-medium text-[#0C447C] shadow-[0_16px_50px_rgba(10,22,40,0.05)]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              {success}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#185FA5]/14 bg-white shadow-[0_24px_80px_rgba(10,22,40,0.08)]"
          >
            <div className="border-b border-[#185FA5]/10 px-6 py-5 text-sm leading-7 text-muted-foreground md:px-8">
              Submission deadline: July 31, 2026 AoE. Fields marked with * are required. If you need to revise a
              submission, please submit the form again using the same title and contact email. We will consider the
              latest submission received before the deadline. For any queries, contact{" "}
              <a
                href="mailto:safesurgworkshop@gmail.com"
                className="font-medium text-[#0C447C] underline underline-offset-2 transition-colors hover:text-[#D9A066]"
              >
                safesurgworkshop@gmail.com
              </a>
              .
            </div>

            <div className="grid gap-10 px-6 py-8 md:px-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <h2
                  className="text-[2rem] leading-none text-primary"
                  style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
                >
                  Submission details
                </h2>
              </div>

              <div className="grid gap-5">
                <div>
                  <label htmlFor="title" className="text-sm font-semibold text-foreground">
                    Title <span className="text-red-600">*</span>
                  </label>
                  <p className="mt-1 text-sm text-muted-foreground">The title of your abstract.</p>
                  <Input
                    id="title"
                    required
                    placeholder="Your abstract title"
                    className="mt-2"
                    value={form.title}
                    onChange={(event) => updateField("title", event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="authors" className="text-sm font-semibold text-foreground">
                    Authors <span className="text-red-600">*</span>
                  </label>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add authors in "FirstName LastName" format separated by commas.
                  </p>
                  <Textarea
                    id="authors"
                    required
                    placeholder="Jane Doe, John Smith"
                    className="mt-2 min-h-20"
                    value={form.authors}
                    onChange={(event) => updateField("authors", event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm font-semibold text-foreground">
                    Contact email <span className="text-red-600">*</span>
                  </label>
                  <p className="mt-1 text-sm text-muted-foreground">Enter the email of the corresponding author.</p>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="example@domain.com"
                    className="mt-2"
                    value={form.contactEmail}
                    onChange={(event) => updateField("contactEmail", event.target.value)}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Is the first/presenting author a clinician? <span className="text-red-600">*</span>
                  </p>
                  <RadioGroup
                    required
                    value={form.presentingAuthorClinician}
                    onValueChange={(value) => updateField("presentingAuthorClinician", value)}
                    className="mt-3 flex gap-6"
                  >
                    <label className="flex items-center gap-2 text-sm text-foreground">
                      <RadioGroupItem value="yes" id="presenting-author-clinician-yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm text-foreground">
                      <RadioGroupItem value="no" id="presenting-author-clinician-no" />
                      No
                    </label>
                  </RadioGroup>
                </div>

                <div>
                  <label htmlFor="key-information" className="text-sm font-semibold text-foreground">
                    Key information <span className="text-red-600">*</span>
                  </label>
                  <p className="mt-1 text-sm text-muted-foreground">Please paste your key information section here.</p>
                  <Textarea
                    id="key-information"
                    required
                    placeholder="Paste your key information section"
                    className="mt-2 min-h-32"
                    value={form.keyInformation}
                    onChange={(event) => updateField("keyInformation", event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#185FA5]/10 bg-[#F4F1EA]/55 px-6 py-8 md:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <h2
                    className="text-[2rem] leading-none text-primary"
                    style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
                  >
                    Upload Abstract
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Upload a single PDF. The maximum file size is 10 MB.
                  </p>
                </div>

                <div className="rounded-lg border border-dashed border-[#185FA5]/24 bg-white px-5 py-5">
                  <label htmlFor="pdf" className="text-sm font-semibold text-foreground">
                    Upload PDF <span className="text-red-600">*</span>
                  </label>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Supported file type: PDF. Maximum size: 10 MB.
                  </p>
                  <label
                    htmlFor="pdf"
                    className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#185FA5]/18 bg-white px-4 py-2 text-sm font-medium text-[#0C447C] transition-colors hover:bg-[#185FA5]/5"
                  >
                    <Upload size={16} />
                    Add File
                  </label>
                  <input
                    id="pdf"
                    type="file"
                    accept="application/pdf,.pdf"
                    required
                    className="sr-only"
                    onChange={(event) => handleFileChange(event.target.files?.[0])}
                  />
                  {file && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Selected: <span className="font-medium text-foreground">{file.name}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-[#185FA5]/10 px-6 py-8 md:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <h2
                    className="text-[2rem] leading-none text-primary"
                    style={{ fontFamily: '"Instrument Serif", serif', fontStyle: "normal", fontWeight: 500 }}
                  >
                    Consent
                  </h2>
                </div>

                <div className="space-y-5">
                  <label className="flex items-start gap-4 text-sm leading-6 text-foreground">
                    <Checkbox
                      checked={form.consentReview}
                      onCheckedChange={(checked) => updateField("consentReview", checked === true)}
                      className="mt-1"
                      aria-required="true"
                      required
                    />
                    <span>
                      <span className="text-red-600">*</span> I consent to the SafeSurg organizing committee using the
                      details I provide here to review and manage my abstract for this workshop.
                    </span>
                  </label>
                  <label className="flex items-start gap-4 text-sm leading-6 text-foreground">
                    <Checkbox
                      checked={form.consentPresent}
                      onCheckedChange={(checked) => updateField("consentPresent", checked === true)}
                      className="mt-1"
                      aria-required="true"
                      required
                    />
                    <span>
                      <span className="text-red-600">*</span> I confirm that, if accepted, at least one author will
                      register for the workshop and present this work as a poster on-site.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {error && (
              <div className="mx-6 mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800 md:mx-8">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#185FA5]/10 bg-primary px-6 py-5 md:px-8">
              <Button type="submit" disabled={submitting || !isConfigured} className="gradient-accent text-primary">
                {submitting ? "Submitting..." : "Submit"}
              </Button>
              <button
                type="reset"
                className="text-sm font-medium text-[#F4F1EA]/75 transition-colors hover:text-[#D9A066]"
                onClick={() => {
                  setForm(initialFormState);
                  setFile(null);
                  setError("");
                  setSuccess("");
                  setFeedbackModal(null);
                }}
              >
                Clear form
              </button>
            </div>
          </form>
          </div>
        </section>
      </main>
      {feedbackModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A1628]/70 px-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submission-feedback-title"
        >
          <div className="w-full max-w-md rounded-[1.25rem] border border-[#185FA5]/14 bg-white p-6 text-center shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
              feedbackModal.type === "success" ? "bg-[#D9A066]/18 text-[#0C447C]" : "bg-red-50 text-red-700"
            }`}>
              {feedbackModal.type === "success" ? <CheckCircle2 className="h-6 w-6" /> : <AlertCircle className="h-6 w-6" />}
            </div>
            <h2 id="submission-feedback-title" className="mt-5 text-xl font-semibold text-primary">
              {feedbackModal.type === "success" ? "Submission received" : "Submission could not be completed"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {feedbackModal.message}
            </p>
            <Button
              type="button"
              className="mt-6 gradient-accent text-primary"
              onClick={() => setFeedbackModal(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SubmitAbstract;
