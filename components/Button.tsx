import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

export function Button({
  className,
  children,
  variant: _variant,
  contentKey: _contentKey,
  ...props
}: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
