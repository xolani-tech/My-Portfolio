import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
<a href="#home" className="relative flex items-center justify-center w-10 h-10">
  {/* Logo container */}
  <div className="relative w-10 h-10 bg-black rounded-md flex items-center justify-center">
    
    {/* Corner lines */}
    <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-50" />
    {/* <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-red-500" /> */}
    {/* <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-red-500" /> */}
    <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-50" />

    {/* XS text */}
    <span className="text-white font-extrabold tracking-wider text-sm">
      XS
    </span>
  </div>
</a>

            <span className="text-slate-400 text-sm">
              © {currentYear} Xolani Sodam. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-400" /> in Cape Town
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/xolanisodam/" target="_blank"
    rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.github.com/xolani-tech" target="_blank"
    rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:jonathanmicah23@gmail.com" target="_blank"
    rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}