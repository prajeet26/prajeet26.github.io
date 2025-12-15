import React from 'react';
import { ExternalLink } from 'lucide-react';
import { RESEARCH_PAPERS } from '../constants';

const ResearchSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 flex items-center">
        Research Updates
        <div className="h-px bg-gray-200 dark:bg-neutral-800 flex-grow ml-4 transition-colors duration-300"></div>
      </h2>

      <div className="space-y-12">
        {RESEARCH_PAPERS.map((paper) => (
          <div key={paper.id} className="group flex flex-col md:flex-row gap-6 items-start">
            
            {/* Image Thumbnail */}
            <div className="w-full md:w-56 shrink-0 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-neutral-800 relative group-hover:shadow-md transition-all duration-300">
               {/* Aspect ratio container */}
               <div className="aspect-[4/3] w-full bg-gray-100 dark:bg-neutral-900 relative">
                  <img 
                    src={paper.imageUrl} 
                    alt={paper.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-white/5 transition-colors duration-300"></div>
               </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-neutral-100 leading-tight mb-2 group-hover:text-primary transition-colors">
                <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer">
                  {paper.title}
                </a>
              </h3>
              
              <div className="text-sm font-medium text-gray-500 dark:text-neutral-500 mb-3 italic">
                {paper.venue}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <a 
                  href={paper.paperUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide text-primary border border-primary/30 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  PAPER <ExternalLink size={10} />
                </a>
              </div>

              <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed mb-3 text-justify">
                {paper.description}
              </p>

              <div className="text-xs text-gray-500 dark:text-neutral-500 font-medium">
                {paper.collaborators.map((name, index) => (
                  <span key={index}>
                    {name === "P Katari" ? (
                      <span className="text-gray-900 dark:text-neutral-200 font-bold border-b-2 border-primary/20">{name}</span>
                    ) : (
                      name
                    )}
                    {index < paper.collaborators.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;