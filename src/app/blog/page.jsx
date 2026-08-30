import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Calendar } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
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
                  <Link contentKey="cta_19" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link contentKey="cta_20" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
                <Link contentKey="cta_21" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
                <Link contentKey="cta_22" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
                <Link contentKey="cta_23" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
                <Link contentKey="cta_24" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
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
                <Link className="text-text hover:text-primary transition-colors font-medium" href="programs.html"> Our Programs </Link>
                <Link className="text-primary font-bold transition-colors" href="blog.html"> Stories </Link>
                <Link className="text-text hover:text-primary transition-colors font-medium" href="contact.html"> Contact </Link>
                <Link contentKey="cta_25" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link contentKey="cta_26" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
              <Link contentKey="cta_27" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
              <Link contentKey="cta_28" className="block px-3 py-3 text-base font-bold text-primary bg-primary/5 rounded-lg" href="blog.html"> Stories </Link>
              <Link contentKey="cta_29" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
              <Link contentKey="cta_30" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
            </div>
          </div>
        </nav>
        {/* Impact Stories */}
        <section id="impact_stories" className="pt-32 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4"> Impact Stories </h1>
              <p className="text-xl text-text max-w-2xl mx-auto">
                 Real stories of change, resilience, and hope from around the world. 
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <Image variant="cover" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop" alt="Featured Story" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
                <Text variant="bold" className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block"> Featured Story </Text>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"> From Miles to Meters: Bringing Water to Kajiado </h2>
                <p className="text-gray-200 text-lg mb-6 line-clamp-2">
                   For decades, the women of Kajiado walked 10 miles daily for water. See how a solar-powered well changed everything for 500 families. 
                </p>
                <Link variant="inline" className="inline-flex items-center text-white font-bold hover:text-secondary transition-colors" href="#"> Read Full Story 
                <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </div>
            </div>
          </div>
        </section>
        {/* A Classroom Of Dreams */}
        <section id="a_classroom_of_dreams" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Story Card 1 */}
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop" alt="Education" />
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"> Education </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                     Oct 12, 2025 
                  </div>
                  <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors"><Link href="#"> A Classroom of Dreams </Link></h3>
                  <p className="text-text mb-4 line-clamp-3">
                     Meet the first generation of girls in rural Nepal to attend high school, thanks to our new scholarship program. 
                  </p>
                  <Link className="text-secondary font-bold text-sm hover:underline" href="#"> Read More </Link>
                </div>
              </article>
              {/* Story Card 2 */}
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" alt="Healthcare" />
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"> Healthcare </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                     Sep 28, 2025 
                  </div>
                  <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors"><Link href="#"> Mobile Clinics Save Lives </Link></h3>
                  <p className="text-text mb-4 line-clamp-3">
                     How a converted van is bringing critical maternal care to remote mountain villages in the Andes. 
                  </p>
                  <Link className="text-secondary font-bold text-sm hover:underline" href="#"> Read More </Link>
                </div>
              </article>
              {/* Story Card 3 */}
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" alt="Environment" />
                  <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary"> Environment </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                     Sep 15, 2025 
                  </div>
                  <h3 className="text-xl font-heading font-bold text-textDark mb-3 group-hover:text-primary transition-colors"><Link href="#"> Planting Hope </Link></h3>
                  <p className="text-text mb-4 line-clamp-3">
                     Community-led reforestation efforts are restoring the land and providing new income sources for farmers. 
                  </p>
                  <Link className="text-secondary font-bold text-sm hover:underline" href="#"> Read More </Link>
                </div>
              </article>
            </div>
            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="primary" contentKey="cta_31" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold"> 1 </Button>
              <Button contentKey="cta_32" className="w-10 h-10 rounded-full bg-white text-text hover:bg-gray-100 flex items-center justify-center font-bold transition-colors"> 2 </Button>
              <Button contentKey="cta_33" className="w-10 h-10 rounded-full bg-white text-text hover:bg-gray-100 flex items-center justify-center font-bold transition-colors"> 3 </Button>
              <Button className="w-10 h-10 rounded-full bg-white text-text hover:bg-gray-100 flex items-center justify-center font-bold transition-colors"><ChevronRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </section>
        {/* Stay Connected */}
        <section id="stay_connected" className="py-20 bg-primaryDark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"> Stay Connected </h2>
            <p className="text-white/80 text-lg mb-8">
               Join 50,000+ supporters receiving weekly updates on our impact and ways to help. 
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input placeholder="Enter your email address" type="email" className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-accent text-textDark" />
              <Button variant="secondary" contentKey="cta_34" className="bg-secondary hover:bg-secondaryHover text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg" type="button"> Subscribe </Button>
            </form>
            <p className="text-white/60 text-sm mt-4"> We respect your privacy. Unsubscribe at any time. </p>
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
