import type { ComponentProps, ReactNode } from "react";
import NextLink from "next/link";

type LinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string;
  variant?: string;
  contentKey?: string;
  children?: ReactNode;
};

function resolveHref(href?: string) {
  if (!href) return "#";
  if (href.endsWith(".html")) {
    const path = href === "index.html" ? "/" : href.slice(0, -5);
    return path.startsWith("/") ? path : `/${path}`;
  }
  return href;
}

export function Link({
  className,
  children,
  variant: _variant,
  contentKey: _contentKey,
  href,
  ...props
}: LinkProps) {
  if (
    href &&
    (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#"))
  ) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink className={className} href={resolveHref(href)} {...props}>
      {children}
    </NextLink>
  );
}
