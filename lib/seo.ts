import type { Metadata } from "next";

export const siteUrl = "https://winafoundation.org";
export const siteName = "WINAfrica Foundation";

export const descriptions = {
  home: "We are an indigenous, not-for-profit health organization working to improve the health and well-being of individuals, families and communities through accessible, inclusive and evidence-based health interventions.",
  about:
    "We are an indigenous Ugandan not-for-profit organisation working to improve health and well-being through accessible, inclusive and evidence-based health interventions. Our initial work focuses on Lira City and Lira District in Northern Uganda.",
  programs:
    "We work across four interconnected programme areas: Sexual & Reproductive Health, Mental Health & Psychosocial Support, Sickle Cell Awareness, and Protection & Safeguards.",
  approaches:
    "We use practical, community-centred approaches to bring health information, engagement and appropriate support pathways closer to the people we serve.",
  stories:
    "As part of our engagement in Lira District, we have held consultations with local government and education stakeholders, including the Chief Administrative Officer (CAO), Lira District Local Government, and the District Education Officer responsible for Guidance and Counselling.",
  contact:
    "We welcome enquiries from communities, schools, local authorities, organisations, development partners and others interested in working with us. Lira City, Northern Uganda. info@winafoundation.org. +256 790 732 411.",
  support:
    "There are many ways to support healthier and more resilient communities. We welcome partnerships, technical expertise, resources and other forms of support that can strengthen our health and well-being programmes.",
} as const;

const defaultImage = "/hero.jpg";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = siteName,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  index?: boolean;
}): Metadata {
  const canonical = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const pageTitle = `${title} | ${siteName}`;

  return {
    title: path === "/" ? { absolute: pageTitle } : title,
    description,
    alternates: { canonical },
    robots: { index, follow: true },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_UG",
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: "WINA",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpeg`,
      image: `${siteUrl}/hero.jpg`,
      email: "info@winafoundation.org",
      telephone: ["+256790732411", "+256781938772"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lira City",
        addressRegion: "Northern Uganda",
        addressCountry: "UG",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Lira City" },
        { "@type": "AdministrativeArea", name: "Lira District" },
      ],
      foundingDate: "2026",
      description: descriptions.home,
      founder: [
        {
          "@type": "Person",
          name: "Samuel Junior Okuny",
          jobTitle: "Executive Director & Founding Member",
        },
        {
          "@type": "Person",
          name: "Elizabeth Aguti",
          jobTitle: "Programme Director & Founding Member",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: descriptions.home,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
