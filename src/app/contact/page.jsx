import { Button } from '@/components/Button';
import { ChevronDown } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Input } from '@/components/Input';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { Users } from 'lucide-react';
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
                  <Link contentKey="cta_24" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
                </div>
                <div className="md:hidden flex items-center">
                  <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
              <div className="px-4 pt-2 pb-6 space-y-2">
                <Link contentKey="cta_25" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
                <Link contentKey="cta_26" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
                <Link contentKey="cta_27" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
                <Link contentKey="cta_28" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="contact.html"> Contact </Link>
                <Link contentKey="cta_29" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
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
                <Link className="text-text hover:text-primary transition-colors font-medium" href="blog.html"> Stories </Link>
                <Link className="text-primary font-bold transition-colors" href="contact.html"> Contact </Link>
                <Link contentKey="cta_30" className="bg-secondary hover:bg-secondaryHover text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-secondary/20 transform hover:-translate-y-0.5" href="donate.html"> Donate Now </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="primary" className="text-text hover:text-primary focus:outline-none" id="mobile-menu-btn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </div>
          <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link contentKey="cta_31" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="about.html"> About Us </Link>
              <Link contentKey="cta_32" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="programs.html"> Our Programs </Link>
              <Link contentKey="cta_33" className="block px-3 py-3 text-base font-medium text-text hover:bg-gray-50 rounded-lg" href="blog.html"> Stories </Link>
              <Link contentKey="cta_34" className="block px-3 py-3 text-base font-bold text-primary bg-primary/5 rounded-lg" href="contact.html"> Contact </Link>
              <Link contentKey="cta_35" className="block px-3 py-3 text-base font-bold text-secondary hover:bg-orange-50 rounded-lg" href="donate.html"> Donate Now → </Link>
            </div>
          </div>
        </nav>
        {/* Get In Touch */}
        <section id="get_in_touch" className="pt-32 pb-12 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-4"> Get in Touch </h1>
            <p className="text-xl text-text max-w-2xl mx-auto">
               Have questions about our programs or want to get involved? We're here to help. 
            </p>
          </div>
        </section>
        {/* Visit Us */}
        <section id="visit_us" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info & Map */}
              <div className="space-y-12">
                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4"><MapPin className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Visit Us </h3>
                    <p className="text-text text-sm">
                       123 Hope Avenue, Suite 400 
                      <br />
                       New York, NY 10012 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4"><Mail className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Email Us </h3>
                    <p className="text-text text-sm">
                       hello@hopehorizon.org 
                      <br />
                       partners@hopehorizon.org 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-yellow-600 mb-4"><Phone className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Call Us </h3>
                    <p className="text-text text-sm">
                       +1 (555) 123-4567 
                      <br />
                       Mon-Fri, 9am - 5pm EST 
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4"><Users className="w-6 h-6" /></div>
                    <h3 className="font-bold text-textDark mb-2"> Volunteer </h3>
                    <p className="text-text text-sm">
                       Join our team 
                      <br />
                       volunteer@hopehorizon.org 
                    </p>
                  </div>
                </div>
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale"></div>
                  <div className="relative z-10 bg-white/80 backdrop-blur px-6 py-3 rounded-full font-bold shadow-lg">
                    <Map className="inline-block w-5 h-5 mr-2 align-text-bottom" />
                     View on Google Maps 
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-heading font-bold text-textDark mb-6"> Send a Message </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-textDark mb-2"> First Name </label>
                      <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-textDark mb-2"> Last Name </label>
                      <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="text" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Email Address </label>
                    <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" type="email" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Subject </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                      <option> General Inquiry </option>
                      <option> Donation Question </option>
                      <option> Volunteering </option>
                      <option> Partnership </option>
                      <option> Media/Press </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-textDark mb-2"> Message </label>
                    <textarea placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
                  </div>
                  <button type="button" className="w-full bg-primary hover:bg-primaryDark text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/30"> Send Message </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Questions */}
        <section id="frequently_asked_questions" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-textDark text-center mb-12"> Frequently Asked Questions </h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> Is my donation tax-deductible? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   Yes, HopeHorizon is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. 
                </p>
              </div>
              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> How much of my donation goes to the cause? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   We are proud that 92% of every dollar donated goes directly to our programs in the field. The remaining 8% covers essential administrative and fundraising costs. 
                </p>
              </div>
              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors"> Can I volunteer abroad? </h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-text mt-4 hidden">
                   Yes! We have volunteer programs in 12 countries. Please visit our Volunteer page or contact us for current opportunities and requirements. 
                </p>
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
