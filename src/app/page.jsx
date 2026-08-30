import NextImage from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { BookOpen } from "lucide-react";
import { Droplets } from "lucide-react";
import { Facebook } from "lucide-react";
import { Heart } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { Image } from "@/components/Image";
import { Instagram } from "lucide-react";
import { Link } from "@/components/Link";
import { MapPin } from "lucide-react";
import { Menu } from "lucide-react";
import { Text } from "@/components/Text";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

export const metadata = {
  title: "Charity Organization - Free Tailwind Template",
  description:
    "Download this free Tailwind CSS Nonprofit website template for Charity Organization. Features a modern design, fully responsive layout, and includes 6 pre-built pages like blog.html, index.html, about.html.",
};

export default function Page() {
  return (
    <div className="font-body antialiased">
      <>
        {/* Navigation */}
        <header>
          <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="shrink-0 flex items-center">
                  <Link className="flex items-center gap-2" href="index.html">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <Text
                      variant="bold"
                      className="font-heading font-bold text-2xl text-primaryDark"
                    >
                      {" "}
                      Hope
                      <Text className="text-secondary"> Horizon </Text>
                    </Text>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    className="text-text hover:text-primary transition-colors font-medium"
                    href="about.html"
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                  <Link
                    className="text-text hover:text-primary transition-colors font-medium"
                    href="programs.html"
                  >
                    {" "}
                    Our Programs{" "}
                  </Link>
                  <Link
                    className="text-text hover:text-primary transition-colors font-medium"
                    href="blog.html"
                  >
                    {" "}
                    Stories{" "}
                  </Link>
                  <Link
                    className="text-text hover:text-primary transition-colors font-medium"
                    href="contact.html"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                  <Link
                    contentKey="cta_44"
                    className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5"
                    href="donate.html"
                  >
                    {" "}
                    Donate Now{" "}
                  </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <button
                    id="mobile-menu-btn"
                    className="text-text hover:text-primary focus:outline-none"
                  >
                    <Menu className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link
                  contentKey="cta_45"
                  className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                  href="about.html"
                >
                  {" "}
                  About Us{" "}
                </Link>
                <Link
                  contentKey="cta_46"
                  className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                  href="programs.html"
                >
                  {" "}
                  Our Programs{" "}
                </Link>
                <Link
                  contentKey="cta_47"
                  className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                  href="blog.html"
                >
                  {" "}
                  Stories{" "}
                </Link>
                <Link
                  contentKey="cta_48"
                  className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg"
                  href="contact.html"
                >
                  {" "}
                  Contact{" "}
                </Link>
                <Link
                  contentKey="cta_49"
                  className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg"
                  href="donate.html"
                >
                  {" "}
                  Donate Now →{" "}
                </Link>
              </div>
            </div>
          </nav>
        </header>
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
                  Over 50,000 lives impacted this year{" "}
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-textDark mb-6 leading-tight">
                  Bring Hope to
                  <br />
                  <Text variant="italic" className="text-primary italic">
                    {" "}
                    Every Heart{" "}
                  </Text>
                </h1>
                <p className="text-xl text-text mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe in a world where every individual has access to
                  clean water, education, and a chance to thrive. Join our
                  movement today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    contentKey="cta_50"
                    className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-secondaryHover text-white font-bold rounded-full text-lg transition-all shadow-xl shadow-secondary/25 transform hover:-translate-y-1"
                    href="donate.html"
                  >
                    {" "}
                    Make a Donation{" "}
                  </Link>
                  <Link
                    contentKey="cta_51"
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-primary hover:text-primary text-textDark font-medium rounded-full text-lg transition-all flex items-center justify-center gap-2"
                    href="programs.html"
                  >
                    {" "}
                    View Our Work
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/50 rounded-full blur-3xl -z-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    variant="cover"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                    alt="Happy children"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
                    <p className="text-white font-heading italic text-xl">
                      "Education is the most powerful weapon which you can use
                      to change the world."
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
                  <Droplets className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Clean Water{" "}
                </h3>
                <p className="text-text">
                  Providing sustainable water solutions to remote villages,
                  reducing disease and improving quality of life.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <BookOpen className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Education{" "}
                </h3>
                <p className="text-text">
                  Building schools and providing scholarships to ensure every
                  child has the opportunity to learn.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                  <Heart className="w-8 h-8 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                  {" "}
                  Healthcare{" "}
                </h3>
                <p className="text-text">
                  Delivering essential medical supplies and mobile clinics to
                  underserved communities.
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
                We focus on holistic community development through targeted
                initiatives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    variant="cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop"
                    alt="Water Project"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {" "}
                    ACTIVE{" "}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Water for Life{" "}
                  </h3>
                  <p className="text-text mb-6">
                    Installing solar-powered wells in drought-prone regions of
                    East Africa.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Read More
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
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop"
                    alt="Education"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-secondary">
                    {" "}
                    URGENT{" "}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Girls' Education{" "}
                  </h3>
                  <p className="text-text mb-6">
                    Providing scholarships and safe learning environments for
                    girls in South Asia.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {/* Program 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    variant="cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                    alt="Healthcare"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {" "}
                    ONGOING{" "}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-textDark mb-3">
                    {" "}
                    Mobile Clinics{" "}
                  </h3>
                  <p className="text-text mb-6">
                    Bringing doctors and medicine to remote mountain villages in
                    the Andes.
                  </p>
                  <Link
                    className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    href="programs.html"
                  >
                    {" "}
                    Read More
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
                View All Programs{" "}
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
                  {" "}
                  Communities We Serve{" "}
                </h2>
                <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                  We work hand-in-hand with local leaders to identify the most
                  vulnerable populations. Our approach is community-led and
                  sustainable.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      {" "}
                      Rural Villages in Sub-Saharan Africa{" "}
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      {" "}
                      Urban Slums in Southeast Asia{" "}
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      {" "}
                      Indigenous Communities in South America{" "}
                    </Text>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <Text className="text-xl font-medium">
                      {" "}
                      Refugee Settlements Worldwide{" "}
                    </Text>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Image 1 - Offset Top */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg transform translate-y-6 sm:translate-y-8">
                  <NextImage
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop"
                    alt="Community 2"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 3 - Offset Bottom */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg transform translate-y-6 sm:translate-y-8">
                  <NextImage
                    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop"
                    alt="Community 3"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 4 */}
                <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden rounded-2xl shadow-lg">
                  <NextImage
                    src="https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=600&q=80"
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
                    We start by listening to the community's needs and
                    aspirations.
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
                    Plan{" "}
                  </h3>
                  <p className="text-text text-sm">
                    We co-create sustainable solutions with local stakeholders.
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
                    Act{" "}
                  </h3>
                  <p className="text-text text-sm">
                    {" "}
                    We implement projects with transparency and efficiency.{" "}
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
                    Empower{" "}
                  </h3>
                  <p className="text-text text-sm">
                    We train locals to maintain projects, ensuring long-term
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Your Gift Changes Lives */}
        <section id="your_gift_changes_lives" className="py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-6">
                {" "}
                Your Gift Changes Lives{" "}
              </h2>
              <p className="text-xl text-text max-w-2xl mx-auto">
                Choose a monthly donation amount to make a sustained impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-textDark mb-2">
                  {" "}
                  Friend{" "}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $25
                  <Text className="text-lg text-gray-400 font-normal">
                    {" "}
                    /mo{" "}
                  </Text>
                </div>
                <p className="text-text mb-8">
                  {" "}
                  Provides school supplies for 5 children every month.{" "}
                </p>
                <Link
                  contentKey="cta_53"
                  className="block w-full py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
                  href="donate.html"
                >
                  {" "}
                  Select{" "}
                </Link>
              </div>
              {/* Tier 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-secondary text-center transform md:-translate-y-4 relative">
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                  {" "}
                  MOST POPULAR{" "}
                </Badge>
                <h3 className="text-2xl font-bold text-textDark mb-2">
                  {" "}
                  Guardian{" "}
                </h3>
                <div className="text-4xl font-bold text-secondary mb-4">
                  $50
                  <Text className="text-lg text-gray-400 font-normal">
                    {" "}
                    /mo{" "}
                  </Text>
                </div>
                <p className="text-text mb-8">
                  {" "}
                  Provides clean water for a family of 4 for a year.{" "}
                </p>
                <Link
                  contentKey="cta_54"
                  className="block w-full py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondaryHover transition-colors shadow-lg shadow-secondary/20"
                  href="donate.html"
                >
                  {" "}
                  Select{" "}
                </Link>
              </div>
              {/* Tier 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-textDark mb-2">
                  {" "}
                  Champion{" "}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  $100
                  <Text className="text-lg text-gray-400 font-normal">
                    {" "}
                    /mo{" "}
                  </Text>
                </div>
                <p className="text-text mb-8">
                  {" "}
                  Funds a mobile clinic visit for an entire village.{" "}
                </p>
                <Link
                  contentKey="cta_55"
                  className="block w-full py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors"
                  href="donate.html"
                >
                  {" "}
                  Select{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Be The Change You Wish To See */}
        <section
          id="be_the_change_you_wish_to_see"
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primaryDark">
            <Image
              variant="cover"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop"
              alt="Background"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">
              {" "}
              Be the Change You Wish to See{" "}
            </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              Every second counts. Your contribution today can save a life
              tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                contentKey="cta_56"
                className="px-10 py-5 bg-secondary hover:bg-secondaryHover text-white font-bold text-xl rounded-full transition-all shadow-xl transform hover:scale-105"
                href="donate.html"
              >
                {" "}
                Donate Now{" "}
              </Link>
              <Link
                contentKey="cta_57"
                className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold text-xl rounded-full transition-all"
                href="contact.html"
              >
                {" "}
                Volunteer With Us{" "}
              </Link>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link
                  className="flex items-center gap-2 mb-6"
                  href="index.html"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <Text
                    variant="bold"
                    className="font-heading font-bold text-2xl text-primaryDark"
                  >
                    {" "}
                    Hope
                    <Text className="text-secondary"> Horizon </Text>
                  </Text>
                </Link>
                <p className="text-text max-w-md mb-6">
                  Dedicated to empowering communities through sustainable
                  development, education, and healthcare initiatives.
                </p>
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    className="text-gray-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    <Youtube className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Quick Links </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="about.html"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="programs.html"
                    >
                      {" "}
                      Our Programs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="blog.html"
                    >
                      {" "}
                      Impact Stories{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="contact.html"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Get Involved </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="donate.html"
                    >
                      {" "}
                      Donate{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="#"
                    >
                      {" "}
                      Volunteer{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="#"
                    >
                      {" "}
                      Partner With Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-text hover:text-primary transition-colors"
                      href="#"
                    >
                      {" "}
                      Careers{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                {" "}
                © 2026 HopeHorizon. 501(c)(3) Non-Profit Organization.{" "}
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                for the world
              </p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
