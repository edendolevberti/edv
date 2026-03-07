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
  Layers,
  Target,
  TrendingUp,
  Megaphone,
  Store,
  Search
} from 'lucide-react';
import { ServiceItem, TestimonialItem, SocialLink, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'בניית אתרים',
    description: 'בניית אתרי תדמית מרהיבים, מהירים ומותאמים לנייד. עיצוב אישי שמדגיש את המותג שלך וממיר גולשים ללקוחות.',
    icon: Laptop
  },
  {
    id: 2,
    title: 'בניית חנויות דיגיטליות',
    description: 'הקמת חנויות E-commerce מתקדמות עם חווית רכישה חלקה, ניהול מלאי וחיבור למערכות סליקה ומשלוחים.',
    icon: Store
  },
  {
    id: 3,
    title: 'ניהול גוגל לעסק שלי (GMB)',
    description: 'אופטימיזציה וניהול הפרופיל העסקי בגוגל מפות. הגדלת החשיפה בחיפושים מקומיים ושיפור הדירוג בגוגל.',
    icon: MapPin
  },
  {
    id: 4,
    title: 'קידום אורגני (SEO)',
    description: 'בניית תשתית נכונה למנועי החיפוש, מחקר מילים וכתיבת תוכן שיביא את האתר שלך למקומות הראשונים בגוגל.',
    icon: Search
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Pulse Energy',
    role: 'מנכ"ל',
    content: 'עדן בנה לנו אתר תדמית מדהים שמשדר בדיוק את הערכים שלנו. התהליך היה מקצועי, מהיר והתוצאה מעל ומעבר לציפיות.',
    image: 'https://ui-avatars.com/api/?name=Pulse+Energy&background=0D8ABC&color=fff'
  },
  {
    id: 2,
    name: 'עו"ד דניאל תמיר',
    role: 'בעלים, DTS Law',
    content: 'החנות הדיגיטלית החדשה שלנו פשוט עובדת. הממשק נוח, העיצוב נקי והלקוחות לא מפסיקים להחמיא. תודה על השירות המצוין!',
    image: 'https://ui-avatars.com/api/?name=DTS+Law&background=1e293b&color=fff'
  },
  {
    id: 3,
    name: 'BarBike',
    role: 'בעלים',
    content: 'מאז שעדן סידר לנו את הפרופיל בגוגל מפות, כמות הטלפונים מהאזור קפצה משמעותית. אנשים מוצאים אותנו בקלות ומגיעים לחנות.',
    image: 'https://ui-avatars.com/api/?name=Bar+Bike&background=16a34a&color=fff'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram, color: 'text-pink-500' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: Video, color: 'text-purple-500' },
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook, color: 'text-green-500' },
  { name: 'Google', url: 'https://google.com', icon: Globe, color: 'text-emerald-500' }
];

// Note: Please save the original images to '/images/carousel/' folder in your project
export const CAROUSEL_IMAGES = [
  'https://i.postimg.cc/2S6ShByv/1.jpg', 
  'https://i.postimg.cc/bwBNTNS2/2.jpg', 
  'https://i.postimg.cc/7ZWYVYJG/3.jpg', 
  'https://i.postimg.cc/vZNHzHx4/4.jpg', 
  'https://i.postimg.cc/t4MC5Cn1/5.jpg', 
  'https://i.postimg.cc/dVxtBtZG/6.jpg', 
  'https://i.postimg.cc/T34Y9Y5q/8.jpg', 
];

// Note: Gallery items now focus on Campaign Results + The Asset built
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Pulse Energy - אתר תדמית',
    category: 'website',
    url: 'https://pulsee.co.il',
    image: 'https://i.postimg.cc/tgHY22kP/pulsee_co_il.png',
    description: 'עיצוב ופיתוח אתר תדמית מודרני לחברת אנרגיה, עם דגש על חווית משתמש ומהירות טעינה.'
  },
  {
    id: 2,
    title: 'DTS Law - אתר לעורכי דין',
    category: 'website',
    url: 'https://dts-law.co.il',
    image: 'https://i.postimg.cc/zf1V007h/dts_law_co_il.png',
    description: 'בניית אתר ייצוגי למשרד עורכי דין, כולל אזור מאמרים וטפסי יצירת קשר חכמים.'
  },
  {
    id: 3,
    title: 'BarBike - חנות אופניים',
    category: 'website',
    url: 'https://barbike.co.il',
    image: 'https://i.postimg.cc/VNcdDDg0/barbike_co_il.png',
    description: 'חנות איקומרס מלאה לציוד אופניים, כולל ניהול קטלוג מוצרים וסליקה מאובטחת.'
  },
  {
    id: 4,
    title: 'Agro-Lima - קטלוג מוצרים',
    category: 'website',
    url: 'https://agrolima.co.il',
    image: 'https://i.postimg.cc/g0PnNNs6/agrolima_co_il.png',
    description: 'אתר קטלוגי לחברה חקלאית, המציג את מגוון המוצרים והפתרונות בצורה ויזואלית ומרשימה.'
  },
  {
    id: 5,
    title: 'Noa Law - אתר תוכן',
    category: 'website',
    url: 'https://noa-law.co.il',
    image: 'https://i.postimg.cc/pdtpqqCr/noa_law_co_il.png',
    description: 'אתר תוכן ובלוג משפטי, מותאם לקידום אורגני (SEO) ונגיש לכל המכשירים.'
  },
  {
    id: 6,
    title: 'Porat Law - דף נחיתה',
    category: 'website',
    url: 'https://porat-law.co.il',
    image: 'https://i.postimg.cc/CKVzmm7Z/porat_law_co_il.png',
    description: 'עיצוב דף נחיתה ממיר לקמפיינים ממומנים, עם קריאה לפעולה ברורה ועיצוב נקי.'
  }
];