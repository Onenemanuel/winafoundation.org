import NextImage from "next/image";
import {
  Accessibility,
  ArrowRight,
  Brain,
  Dna,
  HeartPulse,
  Landmark,
  Lock,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { Text } from "@/components/Text";
import { descriptions, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Championing Change for Healthier, Resilient Communities",
  description: descriptions.home,
  path: "/",
});

export default function Page() {
  return (
    <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-pattern"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primaryDark font-medium text-sm mb-6">
                  <Text className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Community-Centred Health & Well-being
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-textDark tracking-tight leading-[1.12] mb-6 text-balance">
                  Championing Change for{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">
                    Healthier, Resilient
                  </span>{" "}
                  Communities
                </h1>
                <p className="text-xl text-text mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We are an indigenous, not-for-profit health organization
                  working to improve the health and well-being of individuals,
                  families and communities through accessible, inclusive and
                  evidence-based health interventions. We focus on Sexual &
                  Reproductive Health, Mental Health & Psychosocial Support,
                  Sickle Cell Awareness, and Protection & Safeguards empowering
                  people with knowledge, strengthening community support systems
                  and connecting those in need to appropriate services.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryDark text-white font-bold rounded-full text-lg text-center"
                    href="/programs"
                  >
                    Explore Our Programmes
                  </Link>
                  <Link
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-primary hover:text-primary text-textDark font-medium rounded-full text-lg transition-all flex items-center justify-center gap-2"
                    href="/contact"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/50 rounded-full blur-3xl -z-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Happy children"
                    variant="cover"
                    src="/hero.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
                    <p className="text-white font-heading italic text-xl">
                      Trusted health education and peer support, bringing
                      practical knowledge closer to young people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clean Water */}
        <section id="clean_water" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <HeartPulse className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Sexual & Reproductive Health{" "}
                </h3>
                <p className="text-text">
                  Promoting accurate, inclusive and age-appropriate information
                  that enables individuals and communities to make informed
                  decisions about sexual and reproductive health and well-being.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Brain className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Mental Health & Psychosocial Support{" "}
                </h3>
                <p className="text-text">
                  Promoting mental well-being, reducing stigma and strengthening
                  awareness of healthy coping, psychosocial support and pathways
                  to appropriate care.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <Dna className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Sickle Cell Awareness{" "}
                </h3>
                <p className="text-text">
                  Increasing understanding of sickle cell disease, promoting
                  early awareness, reducing stigma and supporting individuals,
                  families and communities with reliable health information.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <Lock className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Protection & Safeguards{" "}
                </h3>
                <p className="text-text">
                  Promoting safe, respectful and inclusive environments through
                  prevention and response to GBV, violence against children,
                  harassment, exploitation and other protection concerns,
                  including alcohol and substance misuse prevention.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Where We Make A Difference */}
        <section
          id="where_we_make_a_difference"
          className="py-24 bg-background"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Text
                variant="bold"
                className="text-secondary font-bold tracking-wider uppercase text-sm"
              >
                {" "}
                Our Programs{" "}
              </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                {" "}
                Where We Make a Difference{" "}
              </h2>
              <p className="text-xl text-text max-w-2xl mx-auto">
                We deliver inclusive, evidence-based health interventions that
                respond to the needs of individuals, families and communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    variant="cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Sexual & Reproductive Health"
                    src="srh.png"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Sexual & Reproductive Health Programme{" "}
                  </h3>
                  <p className="text-text mb-6">
                    We promote informed decision-making, healthy relationships
                    and access to accurate sexual and reproductive health
                    information, with particular attention to adolescents and
                    young people.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {/* Program 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    variant="cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Mental Health & Psychosocial Support"
                    src="mhpss.png"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Mental Health & Psychosocial Support Programme{" "}
                  </h3>
                  <p className="text-text mb-6">
                    We promote mental well-being, reduce stigma and strengthen
                    awareness of psychosocial support and appropriate pathways
                    to care for individuals and communities.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {/* Program 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Sickle Cell Awareness"
                    src="sickle-cell.png"
                    variant="cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Sickle Cell Awareness Programme{" "}
                  </h3>
                  <p className="text-text mb-6">
                    We raise awareness about sickle cell disease, challenge
                    misconceptions and stigma, and promote knowledge that
                    supports individuals, families and communities affected by
                    or at risk of sickle cell disease.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>{" "}
              {/* Program 4 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Protection & Safeguards"
                    src="protection.png"
                    variant="cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Protection & Safeguards Programme{" "}
                  </h3>
                  <p className="text-text mb-6">
                    We work to promote safe and respectful environments and
                    strengthen prevention and response to protection concerns,
                    including gender-based violence, violence against children,
                    harassment, exploitation and survivor protection. The
                    programme also incorporates prevention and awareness on
                    alcohol and substance misuse as part of protecting health,
                    safety and well-being.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                variant="inline"
                contentKey="cta_52"
                className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
                href="programs.html"
              >
                {" "}
                View All Programmes{" "}
              </Link>
            </div>
          </div>
        </section>
        {/* WINA Health Clubs */}
        <section id="wina_health_clubs" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Text
                variant="bold"
                className="text-secondary font-bold tracking-wider uppercase text-sm"
              >
                Our Signature School Delivery Model
              </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                WINA Health Clubs
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-text leading-relaxed">
              <p>
                WINA Health Clubs are school-based student platforms that give
                learners a safe, structured space to learn, discuss, participate,
                and connect around issues affecting their health, well-being,
                safety, and education. Through peer learning, leadership, and
                practical activities, WINA Health Clubs cover sexual and
                reproductive health, mental health and psychosocial well-being,
                substance abuse prevention, and protection.
              </p>
              <p>
                At the heart of the model is the WINA Health Check-In, a simple,
                regular way of bringing health education directly to learners.
                Delivered as a 3-5-minute talk during school assemblies,
                functions, or other organized gatherings, each Check-In focuses
                on one practical message, from menstrual health and HIV
                prevention to stress management, healthy relationships, GBV
                prevention, or where and how to seek help.
              </p>
              <p>
                Together, WINA Health Clubs and Health Check-Ins create a
                continuous, school-based approach to health promotion, helping
                learners access reliable information, speak about issues that
                affect them, recognize when they need support, and connect with
                the right help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-10 p-6 md:p-8 rounded-2xl bg-background border border-gray-100 flex gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-bold text-textDark mb-2">Safeguard note</h3>
                <p className="text-text leading-relaxed">
                  Student Health Champions are trained as peer educators and
                  health-promoting leaders, not health professionals. They do
                  not diagnose, counsel, treat, or provide any medical or
                  clinical service. Their role is to share approved health
                  information, encourage positive behaviours, promote early
                  help-seeking, and guide learners towards appropriate adult,
                  school, or professional support when needed.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                className="inline-block px-8 py-3 bg-primary hover:bg-primaryDark text-white font-bold rounded-full"
                href="/approaches#health-clubs"
              >
                Learn About WINA Health Clubs
              </Link>
            </div>
          </div>
        </section>

        {/* Communities We Serve */}
        <section
          id="communities_we_serve"
          className="py-24 bg-primaryDark text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Communities We Serve{" "}
                </h2>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-secondary">
                  Health Starts With People{" "}
                </h2>
                <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                  We work with communities to understand their health and
                  well-being needs and develop practical, inclusive and
                  sustainable responses. <br />
                  <br /> We are implementing our initial programmes in Lira City
                  and Lira District in Northern Uganda, focusing on reaching
                  adolescents, young people, families, and other community
                  members who may face barriers to health information, support,
                  and services.
                  <br />
                  <br />
                  We work with:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Adolescents and young people
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Children and families
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <School className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Schools and educational communities
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Accessibility className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      People with disabilities
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Community leaders and local stakeholders
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      Individuals and groups experiencing health or protection
                      vulnerabilities
                    </Text>
                  </li>
                </ul>
                <p className="text-teal-100 text-lg mt-8 leading-relaxed">
                  Our approach is designed to learn from local experience and
                  build models that can be responsibly adapted and expanded to
                  other communities over time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Image 1 - Offset Top */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg transform translate-y-6 sm:translate-y-8">
                  <NextImage
                    src="1.jpg"
                    alt="Community 1"
                    fill
                    priority
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg">
                  <NextImage
                    src="2.jpg"
                    alt="Community 2"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 3 - Offset Bottom */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg transform translate-y-6 sm:translate-y-8">
                  <NextImage
                    src="3.jpg"
                    alt="Community 3"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 4 */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg">
                  <NextImage
                    src="4.jpeg"
                    alt="Community 4"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Path To Impact */}
        <section id="our_path_to_impact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Text
                variant="bold"
                className="text-secondary font-bold tracking-wider uppercase text-sm"
              >
                {" "}
                How We Work{" "}
              </Text>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mt-2 mb-6">
                {" "}
                Our Path to Impact{" "}
              </h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
                    {" "}
                    1{" "}
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">
                    {" "}
                    Listen{" "}
                  </h3>
                  <p className="text-text text-sm">
                    We listen to individuals, families, young people and
                    communities to understand their experiences, priorities and
                    health needs.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {" "}
                    2{" "}
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">
                    {" "}
                    Educate{" "}
                  </h3>
                  <p className="text-text text-sm">
                    We provide accessible, inclusive and evidence-based health
                    information that helps people make informed decisions and
                    protect their well-being.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {" "}
                    3{" "}
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">
                    {" "}
                    Engage{" "}
                  </h3>
                  <p className="text-text text-sm">
                    {" "}
                    We work with communities, schools, local leaders and other
                    stakeholders to create meaningful opportunities for
                    participation, dialogue and health promotion.{" "}
                  </p>
                </div>
                {/* Step 4 */}
                <div className="bg-white p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {" "}
                    4{" "}
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">
                    {" "}
                    Connect & Strengthen{" "}
                  </h3>
                  <p className="text-text text-sm">
                    We strengthen awareness of appropriate support and referral
                    pathways while building the knowledge, confidence and
                    leadership of individuals and communities to promote lasting
                    change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support for Healthier Communities */}
        <section id="support_for_healthier_communities" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6">
              Support for Healthier Communities
            </h2>
            <p className="text-xl text-text mb-6 leading-relaxed">
              Your support can help us expand access to health education,
              wellbeing initiatives, community engagement and appropriate
              referral pathways.
            </p>
            <p className="text-xl text-text mb-10 leading-relaxed">
              We welcome individuals, institutions and organisations interested
              in supporting our work through partnerships, technical expertise,
              resources and other forms of collaboration.
            </p>
            <Link
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-full text-lg"
              href="/support"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
        <section id="champion_change" className="py-24 bg-primaryDark text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Champion Change With Us
            </h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Healthier communities are built through knowledge, collaboration,
              and access to the right support. Join us in advancing inclusive
              health and well-being for children, adolescents, young people,
              families, and communities.
            </p>
            <Link
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-full text-lg"
              href="/support"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
    </main>
  );
}
