import NextImage from "next/image";
import { Link } from "@/components/Link";
import { descriptions, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Building Healthier, Resilient Communities",
  description: descriptions.about,
  path: "/about/",
});

const programmeAreas = [
  "Sexual & Reproductive Health",
  "Mental Health & Psychosocial Support",
  "Sickle Cell Awareness",
  "Protection & Safeguards",
];

const values = [
  {
    title: "Inclusion",
    text: "We strive to ensure that people are respected and able to participate regardless of their circumstances.",
  },
  {
    title: "Dignity",
    text: "We promote respectful and person-centred engagement.",
  },
  {
    title: "Evidence",
    text: "We promote health information and interventions grounded in reliable evidence.",
  },
  {
    title: "Safeguarding",
    text: "We prioritise safety, protection and responsible engagement.",
  },
  {
    title: "Collaboration",
    text: "We work with communities, institutions and stakeholders to strengthen sustainable responses.",
  },
  {
    title: "Accountability",
    text: "We aim to use resources responsibly and remain accountable to the communities and partners we serve.",
  },
];

const founders = [
  {
    name: "Samuel Junior Okuny",
    role: "Executive Director & Founding Member",
    src: "/Samuel.png",
  },
  {
    name: "Elizabeth Aguti",
    role: "Programme Director & Founding Member",
    src: "/Elizabeth%20.jpeg",
  },
];

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-textDark mb-8">
            Building Healthier, Resilient Communities
          </h1>
          <p className="text-xl text-text leading-relaxed">
            We are an indigenous Ugandan not-for-profit organisation working to
            improve health and well-being through accessible, inclusive and
            evidence-based health interventions.
          </p>
          <p className="text-xl text-text leading-relaxed mt-6">
            Our initial work focuses on Lira City and Lira District in Northern
            Uganda, where we work with adolescents, young people, families,
            schools, communities, and local stakeholders.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 sm:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
              <NextImage
                src="/hero.jpg"
                alt="Young people taking part in a WINAfrica Foundation health activity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
                How We Started
              </h2>
              <div className="space-y-6 text-lg text-text leading-relaxed">
                <p>
                  WINAfrica Foundation was born from a simple question: what
                  happens when people don&apos;t have the right health
                  information or support before they need it?
                </p>
                <p>
                  In Northern Uganda, evidence points to significant gaps in
                  adolescent health knowledge, a heavy burden of teenage
                  pregnancy and HIV, and widespread mental wellbeing challenges,
                  with many young people unsure where to turn for support.
                  These realities convinced us that health work cannot begin
                  only once someone is already in crisis. Prevention starts
                  with knowledge, early awareness, safe conversations and clear
                  pathways to support.
                </p>
                <p>
                  WINAfrica Foundation was established in 2026 to bring
                  reliable, evidence-informed health education closer to
                  individuals, families and communities, working alongside
                  schools, health systems, local authorities and community
                  structures.
                </p>
                <p>
                  Schools quickly became a natural starting point, a consistent
                  environment where young people build confidence and positive
                  habits. That is how the WINA Health Club was born: our
                  student-led, teacher-supported model for peer health
                  education, leadership and referral, now piloting in schools
                  across Lira City.
                </p>
                <p>
                  We began in Lira City and Lira District, and we are building
                  the partnerships and evidence to grow responsibly and
                  progressively across Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-primaryDark text-white">
            <p className="text-accent font-bold tracking-wider uppercase text-sm mb-3">
              Our Mission
            </p>
            <p className="text-2xl md:text-3xl font-heading font-bold leading-snug">
              To improve the health and well-being of individuals, families,
              and communities through accessible, inclusive, and evidence-based
              health interventions.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-background border border-gray-100">
            <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">
              Our Vision
            </p>
            <p className="text-2xl md:text-3xl font-heading font-bold text-textDark leading-snug">
              Healthy communities where every individual has the opportunity to
              thrive physically, mentally, and socially.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-textDark mb-6">
            Why We Exist
          </h2>
          <p className="text-lg text-text leading-relaxed mb-6">
            We believe that access to appropriate health information, supportive
            environments and reliable pathways to care can contribute to
            healthier individuals, stronger families and more resilient
            communities.
          </p>
          <p className="text-lg text-text leading-relaxed">
            We therefore work to bring practical health education closer to
            people while strengthening connections between communities,
            schools, local stakeholders and appropriate support services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-textDark mb-4">
              Our Programme Areas
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              These are the areas we work on. How we deliver them is set out in{" "}
              <Link href="/approaches" className="text-primary font-bold">
                Our Approaches
              </Link>
              .
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmeAreas.map((area) => (
              <li
                key={area}
                className="p-6 rounded-2xl bg-background border border-gray-100 text-center font-heading font-bold text-lg text-textDark"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View Our Programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-textDark text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <article
                key={value.title}
                className="bg-white p-8 rounded-2xl border border-gray-100"
              >
                <h3 className="text-2xl font-heading font-bold text-primaryDark mb-3">
                  {value.title}
                </h3>
                <p className="text-text leading-relaxed">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-textDark">
              Our Founding Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {founders.map((person) => (
              <article key={person.name} className="text-center">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <NextImage
                    src={person.src}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <h3 className="text-xl font-bold text-textDark">{person.name}</h3>
                <p className="text-primary font-medium mt-1">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
