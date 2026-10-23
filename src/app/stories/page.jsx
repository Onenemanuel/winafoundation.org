import NextImage from "next/image";

export const metadata = {
  title: "Stories & Updates",
  description:
    "Updates on WINAfrica Foundation's engagement with local government and education stakeholders in Lira District.",
};

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">
            Stories & Updates
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-textDark mb-6">
            Working With Local Stakeholders
          </h1>
          <p className="text-2xl font-heading text-primary">
            Building Partnerships for Community Health
          </p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 sm:h-[28rem] rounded-3xl overflow-hidden shadow-xl mb-10">
            <NextImage
              src="/CAO.jpeg"
              alt="WINAfrica Foundation consultation with local government stakeholders in Lira District"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <div className="space-y-6 text-lg text-text leading-relaxed">
            <p>
              We recognise that sustainable health and well-being outcomes
              require collaboration with the institutions and stakeholders
              closest to the communities we serve.
            </p>
            <p>
              As part of our engagement in Lira District, we have held
              consultations with local government and education stakeholders,
              including the Chief Administrative Officer (CAO), Lira District
              Local Government, and the District Education Officer responsible
              for Guidance and Counselling.
            </p>
            <p>
              These engagements provide an opportunity to introduce our health
              and well-being programmes, understand local priorities, discuss
              opportunities for collaboration, and strengthen alignment with
              existing community and education structures.
            </p>
            <p>
              We value these relationships as we work towards expanding access
              to inclusive health education, student wellbeing initiatives, and
              appropriate support pathways for children, adolescents, and
              communities.
            </p>
            <p className="font-heading text-xl text-textDark">
              Together, we can champion change for healthier and safer
              communities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
