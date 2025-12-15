import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import NewsSection from './components/NewsSection';
import ResearchSection from './components/ResearchSection';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-300 transition-colors duration-300">
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Main Content Area */}
      <main className="lg:pl-80 xl:pl-96 w-full min-h-screen flex flex-col">
        <div className="max-w-3xl w-full mx-auto px-6 py-24 lg:py-20 lg:px-12">
          
          {/* Bio Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">Aloha!</h1>
            
           <div className="prose prose-lg text-neutral-700 dark:text-neutral-300 prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 prose-a:text-primary dark:prose-invert leading-relaxed space-y-6">

  <p>
    I am a Research Associate at the IACV Lab, IISc Bangalore, advised by Prof.&nbsp;
    <a
      href="https://sites.google.com/iisc.ac.in/somabiswas"
      className="text-primary font-medium hover:text-primaryHover underline decoration-primary/30 underline-offset-4 transition-colors"
    >
      Soma Biswas
    </a>.
  My research focuses on improving the reasoning and reliability of large-scale vision and language systems,
  with an emphasis on real-world, noisy, and culturally grounded data.
  <br />
  <br />
  My work spans across:
</p>


  <ul>
    <li>
      MLLMs alignment for spontaneous speech and culturally grounded data. Leading vision analysis for {' '}
      <a
        href="https://vaani.iisc.ac.in/"
        className="text-primary font-medium hover:text-primaryHover underline decoration-primary/30 underline-offset-4 transition-colors"
      >
        VAANI
      </a>,{' '} by Google, working across noisy, culturally diverse multimodal data (vision,
speech, text) to quantify how MLMMs/VLMs interpret Indian images vs. human perception. 
    </li>
    <li>
      LLM-guided Active Learning for Multimodal Analysis of open source information.
    </li>
  </ul>

              <p>
                Before starting my time at IISc, I had also worked as a data intern at{' '}
                <a href="https://datafinz.com/" className="text-primary font-medium hover:text-primaryHover underline decoration-primary/30 underline-offset-4 transition-colors">
                  DataFinz
                </a>{' '}
                building efficient stage-wise processes by implementing an end-to-end ETL pipeline. I'm currently 
                also a Researcher collaborating with{' '}
                <a href="https://www.linkedin.com/in/deeksha-varshney-5922b57b/" className="text-primary font-medium hover:text-primaryHover underline decoration-primary/30 underline-offset-4 transition-colors">
                  Deeksha Varshney
                </a>{' '}
                at IIT Patna. This is where I collaborated on MedProm, designed to generate contextually relevant 
                medical insights for dialogue systems.
              </p>

              <p className="font-medium text-neutral-800 dark:text-neutral-200 italic border-l-4 border-primary/20 pl-4 py-1">
                I am always up for new collaborations, drop me an email if you want to chat!
              </p>
            </div>
          </motion.section>

          {/* News Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <NewsSection />
          </motion.section>

          {/* Research Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResearchSection />
          </motion.section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
            <p className="mb-2">
              Website based on <a href="https://github.com/orderedlist/minimal" className="hover:text-primary">minimal</a> and inspired by <a href="https://david-abel.github.io/" className="hover:text-primary">David Abel</a>.
            </p>
            <p>© Prajeet Katari 2025</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;