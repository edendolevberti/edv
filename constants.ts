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
    title: 'Pulse Energy Agency',
    category: 'website',
    url: 'https://pulsee.co.il',
    description: 'אתר תדמית חדשני לסוכנות פולס המתמחה בהנדסה בתחום הבניין, אתר התדמית משלב אנימציות מתקדמות וחווית משתמש ייחודית ומושכת.'
  },
  {
    id: 2,
    title: 'DTS Law Firm',
    category: 'website',
    url: 'https://dts-law.co.il',
    description: 'אתר יוקרתי למשרד עורכי דין, המשדר אמינות ומקצועיות עם דגש על נגישות ללקוח.'
  },
  {
    id: 3,
    title: 'Noa Law',
    category: 'website',
    url: 'https://noa-law.co.il',
    description: 'נוכחות דיגיטלית מרשימה לעורכת דין, כולל עיצוב נקי, אזור מאמרים ובלוג משפטי מקצועי.'
  },
  {
    id: 4,
    title: 'BarBike',
    category: 'website',
    url: 'https://barbike.co.il',
    description: 'חנות אונליין (E-com) למותג אופניים, הכוללת קטלוג מוצרים חכם וממשק רכישה מהיר ומאובטח.'
  },
  {
    id: 5,
    title: 'Porat Law',
    category: 'website',
    url: 'https://porat-law.co.il',
    description: 'אתר תדמית נקי ומודרני למשרד עורכי דין, הבנוי בצורה אופטימלית לקידום אורגני בגוגל (SEO).'
  }
];