import React from 'react';
import { NEWS_ITEMS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8 flex items-center">
        Recent News
        <div className="h-px bg-gray-200 dark:bg-neutral-800 flex-grow ml-4 transition-colors duration-300"></div>
      </h2>
      <ul className="space-y-6 border-l-2 border-gray-200 dark:border-neutral-800 ml-3 pl-6 relative transition-colors duration-300">
        {NEWS_ITEMS.map((news) => (
          <li key={news.id} className="relative">
            {/* Timeline Dot */}
            <div className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-neutral-950 transition-colors duration-300 ${news.highlight ? 'bg-primary' : 'bg-gray-300 dark:bg-neutral-700'}`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <span className={`text-sm font-semibold whitespace-nowrap ${news.highlight ? 'text-primary' : 'text-gray-500 dark:text-neutral-500'}`}>
                {news.date}
              </span>
              <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
                {news.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;