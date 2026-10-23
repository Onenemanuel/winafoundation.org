import { Handshake, Megaphone, School, Users } from "lucide-react";

export const metadata = {
  title: "Our Approaches",
  description:
    "WINAfrica Foundation delivers health education through WINA Health Clubs, WINA Health Check-Ins, community health education, and stakeholder engagement.",
};

const approaches = [
  {
    id: "health-clubs",
    title: "WINA Health Clubs",
    icon: School,
    text: "A student-led school health delivery model that promotes health education, peer engagement, leadership, prevention and appropriate support pathways.",
    detail:
      "Before implementation, we train Student Health Champions and Club Patrons and provide appropriate training resources and technical guidance.",
  },
  {
    id: "health-check-ins",
    title: "WINA Health Check-Ins",
    icon: Megaphone,
    text: "A short, approximately 3 to 5 minute health education engagement delivered during school assemblies, functions or other agreed school gatherings. It provides students with practical, age-appropriate health information and encourages healthy choices, awareness and help-seeking.",
  },
  {
    id: "community-health-education",
    title: "Community Health Education",
    icon: Users,
    text: "We engage communities through accessible health education and awareness activities addressing relevant health and well-being priorities.",
  },
  {
    id: "stakeholder-engagement",
    title: "Stakeholder Engagement",
    icon: Handshake,
    text: "We work with schools, local authorities, community leaders, institutions and other relevant stakeholders to understand priorities, strengthen collaboration and support appropriate referral and response pathways.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">
            How we deliver
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-textDark mb-6">
            Our Approaches
          </h1>
          <p className="text-xl text-text leading-relaxed">
            We use practical, community-centred approaches to bring health
            information, engagement and appropriate support pathways closer to
            the people we serve.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <article
                key={approach.id}
                id={approach.id}
                className="scroll-mt-28 bg-background border border-gray-100 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 bg-primary text-white rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-sm mb-1">
                      0{index + 1}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-textDark mb-4">
                      {approach.title}
                    </h2>
                    <p className="text-lg text-text leading-relaxed">
                      {approach.text}
                    </p>
                    {approach.detail ? (
                      <p className="text-lg text-text leading-relaxed mt-4">
                        {approach.detail}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
