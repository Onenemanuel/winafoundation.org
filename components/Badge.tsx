import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

export function Badge({
  className,
  children,
  variant: _variant,
  contentKey: _contentKey,
  ...props
}: BadgeProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
