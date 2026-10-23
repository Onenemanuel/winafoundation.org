import { ClientRedirect } from "@/components/ClientRedirect";
import { descriptions, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Support Our Work",
  description: descriptions.support,
  path: "/support/",
  index: false,
});

export default function Page() {
  return <ClientRedirect href="/support/" label="Support Our Work" />;
}
