import React from 'react';

export interface LinkItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  highlight?: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  venue: string;
  paperUrl: string;
  imageUrl: string;
  description: string;
  collaborators: string[];
}

export interface NavbarItem {
  label: string;
  url: string;
  isActive?: boolean;
}

export interface AffiliationItem {
  id: string;
  name: string;
  logoUrl: string;
  url?: string;
  gridIndex?: number; // 0 to 8, specifying position in 3x3 grid
}