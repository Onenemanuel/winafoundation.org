import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact WINAfrica Foundation in Lira City, Northern Uganda, about programmes, schools, and partnerships.",
};

const faqs = [
  {
    question: "Where do you currently work?",
    answer:
      "Our initial programme focus is Lira City and Lira District in Northern Uganda.",
  },
  {
    question: "What are your programme areas?",
    answer:
      "Sexual & Reproductive Health, Mental Health & Psychosocial Support, Sickle Cell Awareness, and Protection & Safeguards.",
  },
  {
    question: "Do you work with schools?",
    answer:
      "Yes. Our school-based work includes WINA Health Clubs, WINA Health Check-Ins, health education, peer engagement and appropriate referral pathways.",
  },
  {
    question: "What is a WINA Health Club?",
    answer:
      "It is our student-led school health delivery model through which trained Student Health Champions promote approved health messages, peer engagement, healthy behaviours and help-seeking while connecting concerns requiring additional support to appropriate channels.",
  },
  {
    question: "Do Student Health Champions provide medical treatment?",
    answer:
      "No. Student Health Champions are trained peer educators. They do not diagnose, treat, or provide professional counselling. Concerns requiring additional support are directed through the appropriate referral pathway.",
  },
  {
    question: "Can organisations partner with you?",
    answer:
      "Yes. We welcome appropriate partnerships that support our mission and programme objectives.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="pt-36 pb-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-textDark mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-text leading-relaxed">
            We welcome enquiries from communities, schools, local authorities,
            organisations, development partners and others interested in working
            with us.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-background p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-textDark mb-2">Location</h2>
              <p className="text-text">Lira City, Northern Uganda</p>
            </article>
            <article className="bg-background p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-textDark mb-2">Email</h2>
              <a
                href="mailto:info@winafoundation.org"
                className="text-primary font-medium break-all"
              >
                info@winafoundation.org
              </a>
            </article>
            <article className="bg-background p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-yellow-700 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-textDark mb-2">Telephone</h2>
              <p className="text-text">
                <a href="tel:+256790732411" className="hover:text-primary">
                  +256 790 732 411
                </a>
              </p>
              <p className="text-text mt-1">
                <a href="tel:+256781938772" className="hover:text-primary">
                  +256 781 938 772
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-textDark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-textDark mb-2">
                  {item.question}
                </h3>
                <p className="text-text leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
