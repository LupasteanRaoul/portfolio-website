import { personalInfo } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-sm font-light">
               2026 {personalInfo.name}
            </p>
            <p className="text-white/15 text-xs font-light mt-1">
              Built with React, GSAP & passion
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/25 text-xs font-light hover:text-white/50 transition-colors duration-300">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/25 text-xs font-light hover:text-white/50 transition-colors duration-300">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="text-white/25 text-xs font-light hover:text-white/50 transition-colors duration-300">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
