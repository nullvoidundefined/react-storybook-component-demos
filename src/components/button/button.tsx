import type React from "react";
import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** Visual variant of the button */
  variant?: "primary" | "secondary" | "warn" | "danger";
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Unique id for the button element */
  id: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  variant,
  size = "medium",
  backgroundColor,
  children,
  disabled = false,
  type = "button",
  className,
  id,
  ...props
}: ButtonProps) => {
  const resolvedVariant = variant ?? (primary ? "primary" : "secondary");
  const classNames = [
    "acme-button",
    `acme-button--${size}`,
    `acme-button--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      id={id}
      type={type}
      className={classNames}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
