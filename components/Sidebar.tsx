import React, { useState, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS, NAVBAR_LINKS, AFFILIATIONS } from '../constants';
import { AffiliationItem } from '../types';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Prepare the 3x3 grid layout (9 slots)
  const gridItems = useMemo(() => {
    const slots: (AffiliationItem | null)[] = Array(9).fill(null);
    AFFILIATIONS.forEach((aff, index) => {
      // Use the specified gridIndex, or fallback to the array index if within bounds
      const pos = aff.gridIndex !== undefined ? aff.gridIndex : index;
      if (pos >= 0 && pos < 9) {
        slots[pos] = aff;
      }
    });
    return slots;
  }, []);

  // Helper to adjust logo URL for light/dark mode
  // This assumes the constant URLs have "background=262626" (dark default)
  const getThemedLogoUrl = (url: string) => {
    if (isDarkMode) return url;
    // Replace dark background param with light background param for UI-Avatars
    return url.replace('background=262626', 'background=f5f5f5');
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
        <h1 className="text-xl font-bold text-gray-900 dark:text-neutral-100">{PERSONAL_INFO.name}</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 text-gray-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="p-2 text-gray-600 dark:text-neutral-400 hover:text-primary transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 pt-24 px-8 pb-8 lg:hidden flex flex-col items-center gap-8 overflow-y-auto"
          >
             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 dark:border-neutral-800 shadow-lg mb-4">
              <img 
                src={PERSONAL_INFO.portraitUrl} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-neutral-400 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Affiliations Grid Mobile */}
             <div className="grid grid-cols-3 gap-x-2 gap-y-4 w-64">
              {gridItems.map((aff, i) => (
                <div key={i} className="flex flex-col items-center justify-start min-h-[60px]">
                  {aff && (
                    <a
                      href={aff.url || '#'}
                      className="flex flex-col items-center w-full group"
                      title={aff.name}
                    >
                      <div className="h-16 w-full flex items-center justify-center mb-2">
                        <img 
                          src={getThemedLogoUrl(aff.logoUrl)} 
                          alt={aff.name} 
                          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" 
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 dark:text-neutral-500 text-center leading-tight group-hover:text-primary transition-colors">
                        {aff.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            <nav className="w-full max-w-xs space-y-4 text-center">
              {NAVBAR_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className={`block py-3 px-6 rounded-lg text-lg font-medium transition-all ${
                    item.isActive 
                      ? "bg-primary/5 dark:bg-primary/10 text-primary" 
                      : "text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-gray-400 dark:text-neutral-500 mt-auto">
              {PERSONAL_INFO.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-80 xl:w-96 flex-col items-center justify-between py-12 px-8 border-r border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 z-10 overflow-y-auto no-scrollbar transition-colors duration-300">
        
        {/* Top Section: Photo & Identity */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 xl:w-44 xl:h-44 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-neutral-900 shadow-xl ring-1 ring-gray-200 dark:ring-neutral-800"
          >
            <img 
              src={PERSONAL_INFO.portraitUrl} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 dark:text-neutral-100 mb-2"
          >
            {PERSONAL_INFO.name}
          </motion.h1>
          
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-sm text-gray-500 dark:text-neutral-500 hover:text-primary transition-colors mb-6"
          >
            {PERSONAL_INFO.email}
          </motion.a>

          {/* Social Icons & Theme Toggle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-5 mb-8"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-neutral-500 hover:text-primary transition-all duration-300 hover:-translate-y-1"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
            <div className="w-px h-5 bg-gray-300 dark:bg-neutral-800"></div>
            <button
              onClick={toggleTheme}
              className="text-gray-400 dark:text-neutral-500 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:rotate-12"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </motion.div>

          {/* Affiliations Grid Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-3 gap-x-2 gap-y-3 mb-6 w-full max-w-[220px]"
          >
             {gridItems.map((aff, i) => (
                <div key={i} className="flex flex-col items-center justify-start min-h-[60px]">
                  {aff && (
                    <a
                      href={aff.url || '#'}
                      className="flex flex-col items-center w-full group"
                      title={aff.name}
                    >
                      <div className="h-22 w-full flex items-center justify-center mb-2">

                         <img 
                          src={getThemedLogoUrl(aff.logoUrl)} 
                          alt={aff.name} 
                          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100" 
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 dark:text-neutral-500 text-center leading-tight group-hover:text-primary transition-colors">
                        {aff.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
          </motion.div>

        </div>

        {/* Bottom Section: Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full space-y-3"
        >
          <hr className="border-gray-200 dark:border-neutral-800 mb-6 w-1/2 mx-auto transition-colors duration-300" />
          <nav className="flex flex-col gap-2 items-center">
            {NAVBAR_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className={`text-sm tracking-wide py-2 px-4 rounded-full transition-all duration-300 ${
                  item.isActive 
                    ? "text-primary font-medium bg-primary/5 dark:bg-primary/10" 
                    : "text-gray-500 dark:text-neutral-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </aside>
    </>
  );
};

export default Sidebar;