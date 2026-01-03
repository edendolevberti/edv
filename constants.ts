import { 
  Camera, 
  Video, 
  Palette, 
  Smartphone, 
  Instagram, 
  Facebook, 
  Globe 
} from 'lucide-react';
import { ServiceItem, TestimonialItem, SocialLink, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'צילום וידאו מקצועי',
    description: 'צילום ברמה קולנועית באמצעות ציוד מתקדם, תאורה מקצועית וידע טכני רחב ליצירת פריימים מושלמים.',
    icon: Camera
  },
  {
    id: 2,
    title: 'עריכת סושיאל',
    description: 'עריכה דינמית וקצבית המותאמת במיוחד לטיקטוק, אינסטגרם רילס ויוטיוב שורטס כדי לתפוס את תשומת הלב.',
    icon: Smartphone
  },
  {
    id: 3,
    title: 'עיצוב פוסטים',
    description: 'עיצוב גרפי המושך את העין לפיד שלכם. יצירת שפה ויזואלית אחידה שמחזקת את המותג.',
    icon: Palette
  },
  {
    id: 4,
    title: 'הפקת סרטוני תדמית',
    description: 'ניהול תהליך ההפקה משלב הרעיון ועד התוצר הסופי, כולל כתיבת תסריט, בימוי ופוסט-פרודקשן.',
    icon: Video
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    role: 'בעלים של רשת אופנה',
    content: 'העבודה עם עדן הייתה חוויה מדהימה. הסרטונים הקפיצו את המכירות שלנו ב-30% כבר בחודש הראשון. מקצוען אמיתי!',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'נועה לוי',
    role: 'מאמנת כושר',
    content: 'חיפשתי מישהו שיבין את הווייב שלי וידע להעביר אותו בסרטונים. עדן קלע בול. העריכה פשוט וואו.',
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'רועי מזרחי',
    role: 'יועץ עסקי',
    content: 'השירות של עיצוב הפוסטים עשה לי סדר בפיד. הכל נראה כל כך נקי ומקצועי עכשיו. ממליץ בחום.',
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: '#', icon: Instagram, color: 'text-pink-500' },
  { name: 'TikTok', url: '#', icon: Video, color: 'text-cyan-400' }, // Using Video icon as placeholder for TikTok
  { name: 'Facebook', url: '#', icon: Facebook, color: 'text-blue-600' },
  { name: 'Google', url: '#', icon: Globe, color: 'text-green-500' }
];

export const CAROUSEL_IMAGES = [
  'https://picsum.photos/600/400?random=10',
  'https://picsum.photos/600/400?random=11',
  'https://picsum.photos/600/400?random=12',
  'https://picsum.photos/600/400?random=13',
  'https://picsum.photos/600/400?random=14',
  'https://picsum.photos/600/400?random=15',
  'https://picsum.photos/600/400?random=16',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'סרטון תדמית למסעדה',
    category: 'video',
    image: 'https://picsum.photos/600/400?random=20',
    description: 'הפקת סרטון קצבי ומעורר תיאבון לרשת המבורגרים מובילה.'
  },
  {
    id: 2,
    title: 'קמפיין אינסטגרם אופנה',
    category: 'design',
    image: 'https://picsum.photos/600/400?random=21',
    description: 'עיצוב סדרת פוסטים וסטוריז לקולקציית קיץ חדשה.'
  },
  {
    id: 3,
    title: 'Reels לחדר כושר',
    category: 'video',
    image: 'https://picsum.photos/600/400?random=22',
    description: 'עריכה דינמית ומקפיצה המציגה את האווירה במכון.'
  },
  {
    id: 4,
    title: 'מיתוג אישי למאמנת',
    category: 'design',
    image: 'https://picsum.photos/600/400?random=23',
    description: 'עיצוב פיד אחיד ונקי המדגיש את ערכי המותג.'
  },
  {
    id: 5,
    title: 'השקת מוצר טכנולוגי',
    category: 'video',
    image: 'https://picsum.photos/600/400?random=24',
    description: 'סרטון הסבר המשלב צילום מוצר ואנימציות טקסט.'
  },
  {
    id: 6,
    title: 'עיצוב באנרים לפייסבוק',
    category: 'design',
    image: 'https://picsum.photos/600/400?random=25',
    description: 'באנרים שיווקיים עם אחוזי המרה גבוהים לקמפיין לידים.'
  }
];