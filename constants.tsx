import React from 'react';
import { Github, Linkedin, Mail, FileText, GraduationCap, Twitter } from 'lucide-react';
import { LinkItem, NewsItem, ResearchPaper, NavbarItem, AffiliationItem } from './types';

// Custom icons for things Lucide doesn't have perfectly
export const GoogleScholarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
  </svg>
);
import imageMe from "./images/image_me.jpg";

export const PERSONAL_INFO = {
  name: "Prajeet Katari",
  email: "katariprajeet26@gmail.com",
  role: "Research Associate",
  affiliation: "IISc, Bangalore",
  portraitUrl: imageMe,
};
export const SOCIAL_LINKS: LinkItem[] = [
  {
    name: "CV",
    url: "https://drive.google.com/file/d/17S7esvQ7jKZl0-1AjCz8n4tMWdWhLYml/view?usp=sharing",
    icon: <FileText size={20} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/prajeet26",
    icon: <Github size={20} />,
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?hl=en&user=pjH7Ci0AAAAJ",
    icon: <GoogleScholarIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prajeet-katari-6769331a1/",
    icon: <Linkedin size={20} />,
  },
  // Uncomment if needed
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/gowthami_s",
  //   icon: <Twitter size={20} />,
  // }
];

export const NAVBAR_LINKS: NavbarItem[] = [
  { label: "Home", url: "#", isActive: true },
  { label: "Blog @Medium", url: "https://medium.com/@katariprajeet26" },
];

// Grid indices: 0 1 2 / 3 4 5 / 6 7 8
// Triangle pattern: 0 (Top Left), 2 (Top Right), 4 (Center)
import nsut from "./images/nsut_vector.png" ;
import iisc from "./images/IISc_Master_Seal_Black.jpg" ;
import iitp from "./images/iitp-logo.png" ;
export const AFFILIATIONS: AffiliationItem[] = [
  { 
    id: 'a1', 
    name: 'IISc Bangalore', 
    logoUrl: iisc, 
    url: "#",
    gridIndex: 0 
  },
  { 
    id: 'a2', 
    name: 'NSUT', 
    logoUrl: nsut, 
    url: '#',
    gridIndex: 2
  },
  { 
    id: 'a3', 
    name: 'IIT Patna', 
    logoUrl: iitp, 
    url: '#',
    gridIndex: 4
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n1",
    date: "Jan 2025",
    content: "Medprom accepted to ACM Transactions on Computing for Healthcare! 🎉",
    highlight: true,
  },
  {
    id: "n2",
    date: "Dec 2024",
    content: "Started collaborating to project VAANI.",
  },
  {
    id: "n3",
    date: "Aug 2024",
    content: "Started as RA at IACV, IISc.",
  },
  {
    id: "n4",
    date: "June 2024",
    content: "Graduated, phew!",
  },
];
import image1 from "./images/p1.png" ;
import image2 from "./images/p2.png" ;
export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "p1",
    title: "MedProm: Bridging Dialogue Gaps in Healthcare with Knowledge-Enhanced Generative Models",
    venue: "ACM Transactions on Computing for Healthcare",
    paperUrl: "/files/MedProm_Paper.pdf",
    imageUrl: image1, // Placeholder for ./images/p2.png
    description: "MedProm is a knowledge-enhanced generative model for medical dialogue systems, integrating the MediConnect Graph to improve context-aware responses. It leverages BioGPT and curriculum learning for precise, coherent, and medically relevant conversations.",
    collaborators: ["D Varshney", "N Behera", "P Katari", "A Ekbal"],
  },
  {
    id: "p2",
    title: "Multimodal BERT for Identifying Claims in Tweets",
    venue: "CLEF 2022, Bologna, Italy",
    paperUrl: "https://ceur-ws.org/Vol-3180/paper-55.pdf",
    imageUrl:image2, // Placeholder for ./images/p1.png
    description: "A Multimodal BERT-based approach for identifying claim check-worthiness, verifiability, and harmful content in tweets, achieving top-3 ranks in CheckThat! Lab 2022.",
    collaborators: ["M Suri", "P Katari", "S Dudeja"],
  },
];