import { 
  Camera, 
  Video, 
  Palette, 
  Smartphone, 
  Instagram, 
  Facebook, 
  Globe,
  MapPin,
  Laptop,
  BarChart,
  Layers
} from 'lucide-react';
import { ServiceItem, TestimonialItem, SocialLink, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'בניית אתרים & E-com',
    description: 'בניית אתרי תדמית מרהיבים וחנויות איקומרס (Shopify/WP) שממירים גולשים ללקוחות משלמים.',
    icon: Laptop
  },
  {
    id: 2,
    title: 'תוכן וידאו וסושיאל',
    description: 'הפקת סרטוני Reels/TikTok ויראליים וניהול עמודי סושיאל שמשאירים אבק למתחרים.',
    icon: Smartphone
  },
  {
    id: 3,
    title: 'שליטה בגוגל (GMB)',
    description: 'השתלטות על המפה ועל תוצאות החיפוש המקומיות כדי שלקוחות ימצאו אתכם ראשונים.',
    icon: MapPin
  },
  {
    id: 4,
    title: 'מעטפת דיגיטלית 360°',
    description: 'אסטרטגיה מלאה המשלבת אתר חזק, נוכחות סושיאל ומיתוג מדויק לצמיחה מקסימלית.',
    icon: Layers
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'רונית אברהם',
    role: 'בעלת קליניקה לאסתטיקה',
    content: 'עדן בנה לי אתר מושלם וסידר את המיקום בגוגל מפות. תוך שבועיים הטלפון לא הפסיק לצלצל מלקוחות חדשים שמצאו אותי בגוגל.',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: 2,
    name: 'עומר פרץ',
    role: 'יזם E-commerce',
    content: 'חנות השופיפיי שעדן הקים לי נראית מיליון דולר. בשילוב עם הרילס שהוא הפיק להשקה, המכירות שברו שיאים.',
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: 3,
    name: 'דנה מור',
    role: 'עורכת דין',
    content: 'חיפשתי מישהו שיעשה סדר בנוכחות הדיגיטלית שלי. עדן לקח פיקוד על הכל - אתר, סרטונים וגוגל. הראש שלי שקט והעסק עובד.',
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram, color: 'text-pink-500' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: Video, color: 'text-cyan-400' },
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook, color: 'text-blue-600' },
  { name: 'Google', url: 'https://google.com', icon: Globe, color: 'text-green-500' }
];

export const CAROUSEL_IMAGES = [
  'https://i.postimg.cc/2S6ShByv/1.jpg',
  'https://i.postimg.cc/bwBNTNS2/2.jpg',
  'https://i.postimg.cc/7ZWYVYJG/3.jpg',
  'https://i.postimg.cc/vZNHzHx4/4.jpg',
  'https://i.postimg.cc/t4MC5Cn1/5.jpg',
  'https://i.postimg.cc/dVxtBtZG/6.jpg',
  'https://i.postimg.cc/T34Y9Y5q/8.jpg',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'חנות תכשיטים אונליין',
    category: 'design', // Using 'design' for Web for now based on types
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'בניית חנות Shopify מעוצבת עם חווית משתמש שהזניקה את המרות האתר.'
  },
  {
    id: 2,
    title: 'קמפיין טיקטוק ויראלי',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'הפקת סדרת סרטונים שהגיעה ל-100K צפיות אורגניות תוך שבוע.'
  },
  {
    id: 3,
    title: 'אתר תדמית למשרד עו"ד',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'אתר יוקרתי המשדר מקצועיות ואמינות, מותאם לקידום בגוגל.'
  },
  {
    id: 4,
    title: 'שליטה בגוגל מפות (GMB)',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'אופטימיזציה של הכרטיס העסקי שהובילה לעלייה של 200% בשיחות נכנסות.'
  },
  {
    id: 5,
    title: 'סרטון השקה לסטארטאפ',
    category: 'video',
    image: 'https://picsum.photos/600/400?random=24',
    description: 'סרטון תדמית המשלב צילומי מוצר ואנימציה להצגת הטכנולוגיה.'
  },
  {
    id: 6,
    title: 'ניהול סושיאל למסעדה',
    category: 'video',
    image: 'https://picsum.photos/600/400?random=25',
    description: 'יצירת שפה ויזואלית וניהול תוכן שוטף שהביא המון לקוחות חדשים.'
  }
];