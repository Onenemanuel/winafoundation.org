"use client";

import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

export function Input({
  className,
  children: _children,
  variant: _variant,
  contentKey: _contentKey,
  ...props
}: InputProps) {
  return <input className={className} {...props} />;
}
