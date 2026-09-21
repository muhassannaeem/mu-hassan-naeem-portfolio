import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ServicesOffered from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <ServicesOffered />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
