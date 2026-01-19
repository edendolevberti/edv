import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'video' | 'design' | 'website';
  image?: string;
  url?: string;
  description: string;
}