import React from 'react';
import { Globe, Search, Share2, Bot, Palette, Video } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import styles from './CapabilitiesStrip.module.css';

interface Capability {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    id: 'web',
    label: 'Websites & Apps',
    category: 'Engineering',
    icon: <Globe size={20} strokeWidth={1.75} />,
  },
  {
    id: 'seo',
    label: 'SEO & Search',
    category: 'Organic Growth',
    icon: <Search size={20} strokeWidth={1.75} />,
  },
  {
    id: 'social',
    label: 'Social Media',
    category: 'Audience Strategy',
    icon: <Share2 size={20} strokeWidth={1.75} />,
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    category: 'Smart Systems',
    icon: <Bot size={20} strokeWidth={1.75} />,
  },
  {
    id: 'design',
    label: 'Design & Branding',
    category: 'Identity',
    icon: <Palette size={20} strokeWidth={1.75} />,
  },
  {
    id: 'video',
    label: 'Video & Motion',
    category: 'Production',
    icon: <Video size={20} strokeWidth={1.75} />,
  },
];

export const CapabilitiesStrip: React.FC = () => {
  return (
    <div className={styles.wrapper} aria-label="Core Agency Capabilities">
      <Container size="default">
        <div className={styles.stripTrack}>
          {capabilities.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.iconBadge} aria-hidden="true">
                {item.icon}
              </div>
              <div className={styles.meta}>
                <span className={styles.categoryTag}>{item.category}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
