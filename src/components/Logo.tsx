/**
 * SafeSurg wordmark — incision mark concept.
 *
 * One unified word. A single amber slash sits at the Safe|Surg junction —
 * like a surgical mark, or the stripe on a road/caution sign. Restrained.
 *
 * "Safe" — regular weight, reads first
 * "/" — amber, the mark
 * "Surg" — slightly lighter weight, the clinical half
 *
 * variant="light"  → dark backgrounds
 * variant="dark"   → light backgrounds
 */

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-5xl",
};

const Logo = ({ variant = "light", size = "md" }: LogoProps) => {
  const safeColor = variant === "light" ? "#F4F1EA" : "#0A1628";
  const surgColor = variant === "light" ? "#4A8FD9" : "#185FA5";
  const slashColor = "#D9A066";
  const textSize = sizes[size];

  return (
    <span className={`inline-flex items-baseline leading-none font-bold tracking-tight ${textSize}`}>
      <span style={{ fontWeight: 700, letterSpacing: "-0.02em", color: safeColor }}>Safe</span>
      <span style={{ fontWeight: 300, letterSpacing: 0, margin: "0 -0.05em", color: slashColor }} aria-hidden="true">
        /
      </span>
      <span style={{ fontWeight: 500, letterSpacing: "-0.02em", color: surgColor }}>Surg</span>
    </span>
  );
};

export default Logo;
