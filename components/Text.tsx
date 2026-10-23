import type { HTMLAttributes, ReactNode } from "react";

type TextProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

export function Text({
  className,
  children,
  variant: _variant,
  contentKey: _contentKey,
  ...props
}: TextProps) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}
