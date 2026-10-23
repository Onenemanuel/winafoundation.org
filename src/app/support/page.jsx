import { Award, Handshake, HeartHandshake } from "lucide-react";
import { Link } from "@/components/Link";

export const metadata = {
  title: "Support Our Work",
  description:
    "Partner with WINAfrica Foundation through collaboration, technical expertise, and support for health and well-being programmes.",
};

const ways = [
  {
    title: "Partner With Us",
    icon: Handshake,
    text: "Organisations and institutions can explore opportunities to collaborate with us in areas aligned with our programme priorities and community needs.",
  },
  {
    title: "Contribute Your Expertise",
    icon: HeartHandshake,
    text: "Professionals and organisations with relevant technical expertise can support knowledge sharing, capacity strengthening and programme development.",
  },
  {
    title: "Support Programme Delivery",
    icon: Award,
    text: "Appropriate resources and contributions can help strengthen health education, community engagement, school-based initiatives and referral pathways.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-16 bg-primaryDark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Support Our Work
          </h1>
          <p className="text-xl text-teal-100 leading-relaxed">
            There are many ways to support healthier and more resilient
            communities.
          </p>
          <p className="text-xl text-teal-100 leading-relaxed mt-4">
            We welcome partnerships, technical expertise, resources and other
            forms of support that can strengthen our health and well-being
            programmes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ways.map((way) => {
              const Icon = way.icon;
              return (
                <article
                  key={way.title}
                  className="p-8 rounded-2xl bg-background border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-primaryDark mb-3">
                    {way.title}
                  </h2>
                  <p className="text-text leading-relaxed">{way.text}</p>
                </article>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-full text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
