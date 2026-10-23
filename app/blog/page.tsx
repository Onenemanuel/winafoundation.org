import { ClientRedirect } from "@/components/ClientRedirect";
import { descriptions, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Working With Local Stakeholders",
  description: descriptions.stories,
  path: "/stories/",
  index: false,
});

export default function Page() {
  return (
    <ClientRedirect href="/stories/" label="Stories & Updates" />
  );
}
