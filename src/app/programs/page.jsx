import NextImage from "next/image";
import { Brain, Dna, HeartPulse, ShieldCheck } from "lucide-react";
import { Link } from "@/components/Link";

export const metadata = {
  title: "Our Programmes",
  description:
    "WINAfrica Foundation works across sexual and reproductive health, mental health and psychosocial support, sickle cell awareness, and protection and safeguards.",
};

const programmes = [
  {
    title: "Sexual & Reproductive Health",
    icon: HeartPulse,
    image: "/srh.png",
    text: "We promote accessible and age-appropriate information that supports informed decision-making, healthy relationships, prevention, and appropriate access to reproductive health information and services.",
  },
  {
    title: "Mental Health & Psychosocial Support",
    icon: Brain,
    image: "/mhpss.png",
    text: "We promote mental well-being, awareness, healthy coping, supportive environments, help-seeking, and appropriate pathways to psychosocial and professional support.",
  },
  {
    title: "Sickle Cell Awareness",
    icon: Dna,
    image: "/sickle-cell.png",
    text: "We promote community awareness and understanding of sickle cell, including accurate information, myth reduction, stigma reduction and appropriate health-seeking.",
    note: "Sickle Cell Awareness is one of our four programme areas. It is part of our community-based work and is not a core topic of the WINA Health Club school programme.",
  },
  {
    title: "Protection & Safeguards",
    icon: ShieldCheck,
    image: "/protection.png",
    text: "We promote safe, respectful and inclusive environments and strengthen awareness, prevention, reporting and appropriate response pathways for protection and safeguarding concerns. Protection & Safeguards is cross-cutting across our school and community work.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-20 bg-primaryDark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Health, Well-being & Protection
          </h1>
          <p className="text-xl text-teal-100 leading-relaxed">
            We work across four interconnected programme areas. While these
            areas are connected, the emphasis of our work varies depending on
            the setting and the needs of the people we serve.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;
            const reversed = index % 2 === 1;
            return (
              <article
                key={programme.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-secondary font-bold mb-2">
                    {index + 1}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-textDark mb-6">
                    {programme.title}
                  </h2>
                  <p className="text-lg text-text leading-relaxed">
                    {programme.text}
                  </p>
                  {programme.note ? (
                    <p className="text-text mt-4 leading-relaxed border-l-4 border-secondary pl-4">
                      {programme.note}
                    </p>
                  ) : null}
                </div>
                <div
                  className={`relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl ${reversed ? "lg:order-1" : ""}`}
                >
                  <NextImage
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold text-textDark mb-4">
              How the work is delivered
            </h2>
            <p className="text-lg text-text leading-relaxed">
              The four programme areas are what we work on. WINA Health Clubs,
              WINA Health Check-Ins, community health education and stakeholder
              engagement are how we deliver that work.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-textDark mb-4">
                School-Based Delivery
              </h3>
              <p className="text-text mb-6">In schools, our work primarily focuses on:</p>
              <ul className="space-y-3 text-textDark font-medium mb-6">
                <li>Sexual & Reproductive Health</li>
                <li>Mental Health & Psychosocial Support</li>
                <li>Protection & Safeguards</li>
              </ul>
              <p className="text-text leading-relaxed">
                These are delivered through approaches such as WINA Health
                Clubs, WINA Health Check-Ins, peer health education, and
                appropriate referral pathways.
              </p>
            </article>
            <article className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-textDark mb-4">
                Community-Based Delivery
              </h3>
              <p className="text-text mb-6">In communities, our work covers:</p>
              <ul className="space-y-3 text-textDark font-medium mb-6">
                <li>Sexual & Reproductive Health</li>
                <li>Mental Health & Psychosocial Support</li>
                <li>Sickle Cell Awareness</li>
                <li>Protection & Safeguards</li>
              </ul>
              <p className="text-text leading-relaxed">
                Community activities may include health education, awareness
                activities, stakeholder engagement, and connections to
                appropriate services and support.
              </p>
            </article>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/approaches"
              className="inline-block px-8 py-3 bg-primary hover:bg-primaryDark text-white font-bold rounded-full"
            >
              See Our Approaches
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
