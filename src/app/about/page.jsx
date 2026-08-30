import NextImage from 'next/image';
import { Book } from 'lucide-react';
import { Button } from '@/components/Button';
import { Droplet } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Image } from '@/components/Image';
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
                  <Link contentKey="cta_21" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link contentKey="cta_22" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
                <Link contentKey="cta_23" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
                <Link contentKey="cta_24" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
                <Link contentKey="cta_25" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
                <Link contentKey="cta_26" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
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
                <Link className="text-primary font-bold transition-colors" href="about.html"> About Us </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="programs.html"> Our Programs </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                <Link contentKey="cta_27" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link contentKey="cta_28" className="block px-3 py-3 text-base font-bold text-primary bg-primary/5 rounded-lg" href="about.html"> About Us </Link>
              <Link contentKey="cta_29" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
              <Link contentKey="cta_30" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
              <Link contentKey="cta_31" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
              <Link contentKey="cta_32" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
            </div>
          </div>
        </nav>
        {/* Our Mission */}
        <section id="our_mission" className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-textDark"> Our Mission </h1>
            <p className="text-2xl md:text-3xl font-heading italic text-primary max-w-4xl mx-auto leading-relaxed">
               "To empower vulnerable communities with the resources, knowledge, and support they need to build a sustainable and dignified future." 
            </p>
          </div>
        </section>
        {/* How It Started */}
        <section id="how_it_started" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute bg-primary/10 rounded-3xl transform -rotate-2 -z-10"></div>
                <NextImage src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" alt="Founders" fill sizes="100vw" className="rounded-2xl shadow-xl w-full" />
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> How It Started </h2>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   HopeHorizon began in 2010 with a simple observation: a single well in a remote village didn't just provide water; it transformed the entire community. Girls went to school instead of walking miles for water. Disease rates dropped. Small businesses flourished. 
                </p>
                <p className="text-lg text-text mb-6 leading-relaxed">
                   Founded by Sarah Jenkins and Dr. David Okonjo, we started as a small team of volunteers. Today, we are a global movement, but our core belief remains the same: sustainable change starts from within the community. 
                </p>
                <div className="flex gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1"> 15+ </div>
                    <p className="text-sm text-gray-500"> Years of Service </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1"> 30+ </div>
                    <p className="text-sm text-gray-500"> Countries Reached </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Meet Our Leadership */}
        <section id="meet_our_leadership" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-textDark mb-6"> Meet Our Leadership </h2>
              <p className="text-xl text-text max-w-2xl mx-auto"> The passionate individuals driving our mission forward. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Member 1 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Sarah Jenkins" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Sarah Jenkins </h3>
                <p className="text-primary font-medium mb-4"> Co-Founder & CEO </p>
                <p className="text-text text-sm px-4">
                   Former UN development officer with 20 years of field experience. 
                </p>
              </div>
              {/* Member 2 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" alt="Dr. David Okonjo" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Dr. David Okonjo </h3>
                <p className="text-primary font-medium mb-4"> Co-Founder & Director of Health </p>
                <p className="text-text text-sm px-4">
                   Public health specialist focused on preventative care in rural areas. 
                </p>
              </div>
              {/* Member 3 */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" alt="Elena Rodriguez" />
                </div>
                <h3 className="text-xl font-bold text-textDark"> Elena Rodriguez </h3>
                <p className="text-primary font-medium mb-4"> Head of Operations </p>
                <p className="text-text text-sm px-4">
                   Expert in logistics and supply chain management for humanitarian aid. 
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted By Global Partners */}
        <section id="trusted_by_global_partners" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-gray-400 mb-12"> Trusted by Global Partners </h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for logos */}
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Globe className="w-8 h-8" />
                 GlobalAid 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Droplet className="w-8 h-8" />
                 WaterWorks 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Book className="w-8 h-8" />
                 EduFuture 
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-gray-600">
                <Heart className="w-8 h-8" />
                 HealthFirst 
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
