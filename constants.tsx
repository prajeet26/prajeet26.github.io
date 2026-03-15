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
import daminiImage from "./assets/damini.png";
import hybridNetImage from "./assets/hybridnet.png";
import alarmImage from "./assets/alarm.png";
import seeBothImage from "./assets/seeboth.png";
export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "p3",
    title: "See Both Ways: A Bidirectional Evaluation of Multimodal Language Models and Human Spontaneous Speech for Image Captioning",
    paperUrl: "",
    imageUrl: seeBothImage,
    description: "This work introduces a bidirectional evaluation framework for image captioning that treats both human spontaneous speech and multimodal language model outputs as valid reference spaces rather than forcing comparison to a single canonical caption. Across datasets derived from VAANI and Places Audio Captions, the analysis shows that humans produce sharper, selectively grounded descriptions while contemporary MLLMs favor broader coverage that can drift into unsupported detail, exposing a measurable gap between machine-generated descriptions and human perceptual salience.",
    collaborators: ["P Katari", "D Eledath", "P Agrawal", "S Biswas", "S Ganapathy"],
    linkLabel: "Request Access",
  },
  {
    id: "p4",
    title: "On the Limits of Multilingual LLMs for Misogyny Detection in Hindi",
    paperUrl: "",
    imageUrl: daminiImage,
    description: "We study multilingual large language models on misogyny detection in Hindi through DAMINI, a manually curated dataset of Hindi YouTube comments annotated across seven misogyny categories spanning hostility, stereotyping, sexual harassment, and coercive behavior. Evaluations under zero-shot and few-shot settings reveal a recurring safety bias in which high-severity and implicit abuse is disproportionately missed; to quantify this failure mode, we introduce Safety Bias Rate (SBR), a task-aware metric that measures how often harmful content is incorrectly judged non-misogynistic.",
    collaborators: ["P Katari", "Moushami", "D Varshney"],
    linkLabel: "Request Access",
  },
  {
    id: "p5",
    title: "ALARM: Multimodal Fake News Detection using MLLM through Active Learning",
    paperUrl: "",
    imageUrl: alarmImage,
    description: "ALARM is an active learning framework for multimodal fake news detection that targets domain shift while sharply reducing annotation cost. Instead of relying only on predictive uncertainty, it uses semantic disagreement between a base detector and a multimodal large language model to surface samples with the highest adaptation value, yielding stronger cross-domain generalization and competitive detection performance with a substantially smaller labeling budget than conventional active learning pipelines.",
    collaborators: ["S K Tah", "A Singh", "P Katari", "A Agarwala"],
    linkLabel: "Request Access",
  },
  {
    id: "p6",
    title: "HybridNet: Efficient Multimodal Fake News Detection",
    paperUrl: "",
    imageUrl: hybridNetImage,
    description: "HybridNet presents a reasoning-aware multimodal fake news detection pipeline that pairs the efficiency of compact vision-language representations with the interpretability of frozen MLLMs used as structured reasoning extractors. By performing consistency analysis across image-text, image-image, and text-text evidence before fusing those signals in a lightweight Reasoning-Aware Classifier, the framework delivers strong multimodal misinformation detection with lower annotation requirements and a more scalable compute profile than end-to-end MLLM fine-tuning.",
    collaborators: ["S K Tah", "A Singh", "P Katari", "A Agarwala", "S Biswas", "L Gupta"],
    linkLabel: "Request Access",
  },
  {
    id: "p1",
    title: "MedProm: Bridging Dialogue Gaps in Healthcare with Knowledge-Enhanced Generative Models",
    venue: "ACM Transactions on Computing for Healthcare",
    paperUrl: "https://dl.acm.org/doi/10.1145/3715069",
    imageUrl: image2, // Placeholder for ./images/p2.png
    description: "MedProm is a knowledge-enhanced medical dialogue framework that couples generative language modeling with the MediConnect Graph to inject clinically relevant structure into response generation. By combining biomedical pretraining with curriculum-based optimization, the system produces responses that are more context-aware, coherent, and medically grounded, helping reduce knowledge gaps that often limit open-ended healthcare conversation systems.",
    collaborators: ["D Varshney", "N Behera", "P Katari", "A Ekbal"],
    linkLabel: "Paper",
  },
  {
    id: "p2",
    title: "Multimodal BERT for Identifying Claims in Tweets",
    venue: "CLEF 2022, Bologna, Italy",
    paperUrl: "https://ceur-ws.org/Vol-3180/paper-55.pdf",
    imageUrl:image1, // Placeholder for ./images/p1.png
    description: "This paper develops a multimodal BERT-based approach for identifying claim check-worthiness, verifiability, and potentially harmful content in noisy social media posts by jointly modeling textual and visual cues in tweets. Designed for the CLEF CheckThat! Lab setting, the system demonstrates that multimodal evidence substantially strengthens fine-grained claim analysis and helped secure top-tier performance across multiple shared-task rankings.",
    collaborators: ["M Suri", "P Katari", "S Dudeja"],
    linkLabel: "Paper",
  },
];
