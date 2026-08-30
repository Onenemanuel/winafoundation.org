import NextImage from 'next/image';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';

export const metadata = {
  title: 'Charity Organization - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Nonprofit website template for Charity Organization. Features a modern design, fully responsive layout, and includes 6 pre-built pages like blog.html, index.html, about.html.',
};

export default function Page() {
  return (
    <div className="font-body antialiased">
      <>
        <header>
          <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex-shrink-0 flex items-center">
                  <Link className="flex items-center gap-2" href="index.html"><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-6 h-6" /></div>
                  <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                  <Text className="text-secondary"> Horizon </Text></Text></Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="about.html"> About Us </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="programs.html"> Our Programs </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                  <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                  <Link contentKey="cta_14" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link contentKey="cta_15" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
                <Link contentKey="cta_16" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
                <Link contentKey="cta_17" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
                <Link contentKey="cta_18" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
                <Link contentKey="cta_19" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
              </div>
            </div>
          </nav>
        </header>
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0 flex items-center">
                <Link className="flex items-center gap-2" href="index.html"><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-6 h-6" /></div>
                <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                <Text className="text-secondary"> Horizon </Text></Text></Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link className="text-text hover:text-primary transition-colors font-medium" href="about.html"> About Us </Link>
                <Link className="text-primary font-bold transition-colors" href="programs.html"> Our Programs </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                <Link contentKey="cta_20" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link contentKey="cta_21" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
              <Link contentKey="cta_22" className="block px-3 py-3 text-base font-bold text-primary bg-primary/5 rounded-lg" href="programs.html"> Our Programs </Link>
              <Link contentKey="cta_23" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
              <Link contentKey="cta_24" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
              <Link contentKey="cta_25" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
            </div>
          </div>
        </nav>
        {/* Our Programs */}
        <section id="our_programs" className="pt-40 pb-20 bg-primaryDark text-white relative overflow-x-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6"> Our Programs </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
               We take a holistic approach to community development, focusing on the interconnected needs of water, health, and education. 
            </p>
          </div>
        </section>
        {/* Clean Water Initiative */}
        <section id="clean_water_initiative" className="py-24 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {/* Program 1: Water */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"><Droplets className="w-8 h-8 text-primary" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Clean Water Initiative </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Access to clean water is the foundation of a healthy community. We drill deep-water wells and install solar-powered pumps in arid regions, ensuring a reliable water source year-round. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Solar-powered filtration systems 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Community maintenance training 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Hygiene education workshops 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_26" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primaryDark transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-accent rounded-3xl transform rotate-3 -z-10"></div>
                <NextImage src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop" alt="Water" fill sizes="100vw" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
            {/* Program 2: Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform -rotate-3 -z-10"></div>
                <NextImage src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop" alt="Education" fill sizes="100vw" className="rounded-2xl shadow-xl w-full" />
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6"><BookOpen className="w-8 h-8 text-secondary" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Education for All </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   We build schools, train teachers, and provide scholarships to ensure that every child, regardless of gender or background, has the opportunity to learn and grow. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     School construction & renovation 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     Teacher training programs 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-primary" />
                     Girls' scholarship funds 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_27" className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondaryHover transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
            </div>
            {/* Program 3: Healthcare */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8 text-red-600" /></div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Community Health </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Our mobile clinics bring essential healthcare to remote areas. We focus on maternal health, vaccinations, and preventative care to reduce mortality rates. 
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Mobile medical units 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Maternal & child health 
                  </li>
                  <li className="flex items-center gap-3 text-text">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                     Disease prevention campaigns 
                  </li>
                </ul>
                <Link variant="inline" contentKey="cta_28" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primaryDark transition-colors" href="donate.html"> Support This Cause </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 -z-10"></div>
                <NextImage src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop" alt="Healthcare" fill sizes="100vw" className="rounded-2xl shadow-xl w-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Impact Stats */}
        <section id="impact_stats" className="py-20 bg-primaryDark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 150+ </div>
                <p className="text-teal-200"> Wells Built </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 12k </div>
                <p className="text-teal-200"> Students Enrolled </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 45 </div>
                <p className="text-teal-200"> Mobile Clinics </p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold mb-2"> 50k+ </div>
                <p className="text-teal-200"> Lives Impacted </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link className="flex items-center gap-2 mb-6" href="index.html"><div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white"><HeartHandshake className="w-5 h-5" /></div>
                <Text variant="bold" className="font-heading font-bold text-2xl text-primaryDark"> Hope 
                <Text className="text-secondary"> Horizon </Text></Text></Link>
                <p className="text-text max-w-md mb-6">
                   Dedicated to empowering communities through sustainable development, education, and healthcare initiatives. 
                </p>
                <div className="flex space-x-4">
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Facebook className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Twitter className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Instagram className="w-6 h-6" /></Link>
                  <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><Youtube className="w-6 h-6" /></Link>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Quick Links </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="about.html"> About Us </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="programs.html"> Our Programs </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="blog.html"> Impact Stories </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-textDark mb-6"> Get Involved </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="donate.html"> Donate </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Volunteer </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Partner With Us </Link>
                  </li>
                  <li>
                    <Link className="text-text hover:text-primary transition-colors" href="#"> Careers </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm"> © 2026 HopeHorizon. 501(c)(3) Non-Profit Organization. </p>
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
