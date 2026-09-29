import ChasePet from "@/components/ChasePet";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-accent"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="scanlines pointer-events-none fixed inset-0 z-0" />
      <CursorGlow />
      <ChasePet />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:grid lg:grid-cols-[40%_60%] lg:gap-16 lg:px-0">
        <Sidebar />
        <main id="main" className="flex flex-col gap-16 py-10 lg:gap-24 lg:py-20">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
