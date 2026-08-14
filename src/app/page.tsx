import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PillNav from '@/components/PillNav';

export default function Home() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <main className="min-h-screen text-black relative bg-[#f8f9fa]">
      <div className="fixed top-4 left-0 w-full z-[1000] flex justify-center pointer-events-none">
        <div className="pointer-events-auto w-full px-4 md:w-auto md:px-0">
          <PillNav
            logo="/Group 7.png"
            logoAlt="Shivam Kumar Jha Logo"
            items={navItems}
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#B8FF65"
            pillTextColor="#000000"
          />
        </div>
      </div>
      <Hero />
      <div className="bg-dot-pattern">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
