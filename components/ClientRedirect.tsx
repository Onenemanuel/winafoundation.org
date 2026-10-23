"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ClientRedirect({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <main className="min-h-[50vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
      <p className="text-lg text-text">
        Taking you to{" "}
        <a className="text-primary font-bold" href={href}>
          {label}
        </a>
        .
      </p>
    </main>
  );
}
