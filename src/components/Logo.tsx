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
  const baseColor  = variant === "light" ? "text-white"   : "text-primary";
  const slashColor = "text-amber-400";
  const textSize   = sizes[size];
  const slashSize  = textSize;

  return (
    <span className={`inline-flex items-baseline leading-none font-bold tracking-tight ${textSize} ${baseColor}`}>
      <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>Safe</span>
      <span
        className={`${slashColor} ${slashSize}`}
        style={{ fontWeight: 200, letterSpacing: 0, margin: "0 -0.05em" }}
        aria-hidden="true"
      >
        /
      </span>
      <span style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>Surg</span>
    </span>
  );
};

export default Logo;
