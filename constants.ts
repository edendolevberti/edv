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
  Megaphone
} from 'lucide-react';
import { ServiceItem, TestimonialItem, SocialLink, GalleryItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'ניהול קמפיינים (PPC)',
    description: 'ניהול תקציבי פרסום במטא (Facebook/Instagram) וגוגל. אופטימיזציה יומית להורדת מחיר הליד והגדלת ה-ROAS.',
    icon: Target
  },
  {
    id: 2,
    title: 'אסטרטגיה ומשפכים',
    description: 'בניית משפכי שיווק (Funnels) חכמים שהופכים גולשים ללקוחות משלמים, כולל אוטומציות וטיפוח לידים.',
    icon: TrendingUp
  },
  {
    id: 3,
    title: 'בניית אתרים וחנויות',
    description: 'הקמת נכסים דיגיטליים: אתרי תדמית ממירים וחנויות E-com שנועדו למכור, כבסיס לקמפיינים מוצלחים.',
    icon: Laptop
  },
  {
    id: 4,
    title: 'שליטה בגוגל (GMB)',
    description: 'קידום העסק בתוצאות המקומיות ובמפות של גוגל לחשיפה אורגנית מקסימלית באזור הפעילות שלך.',
    icon: MapPin
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Pulse Energy',
    role: 'מנכ"ל',
    content: 'התחלנו עם תקציב נמוך, ותוך חודשיים עדן שילש את כמות הלידים שלנו. ה-ROI בקמפיינים חיובי בצורה עקבית, והוא יודע בדיוק איפה הקהל שלנו נמצא.',
    image: 'https://ui-avatars.com/api/?name=Pulse+Energy&background=0D8ABC&color=fff'
  },
  {
    id: 2,
    name: 'עו"ד דניאל תמיר',
    role: 'בעלים, DTS Law',
    content: 'לפני שהגעתי לעדן זרקתי כסף לפח על פייסבוק. עדן בנה לנו משפך שיווקי שמביא פניות איכותיות של לקוחות שמוכנים לסגור, והוריד את עלות הליד ב-40%.',
    image: 'https://ui-avatars.com/api/?name=DTS+Law&background=1e293b&color=fff'
  },
  {
    id: 3,
    name: 'BarBike',
    role: 'בעלים',
    content: 'הקמפיינים של השופינג בגוגל שעדן מנהל לנו פשוט עובדים. האתר שבנינו יחד עם הפרסום הממומן הביא לעלייה של 200% במכירות האונליין בחצי השנה האחרונה.',
    image: 'https://ui-avatars.com/api/?name=Bar+Bike&background=16a34a&color=fff'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram, color: 'text-pink-500' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: Video, color: 'text-cyan-400' },
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook, color: 'text-blue-600' },
  { name: 'Google', url: 'https://google.com', icon: Globe, color: 'text-green-500' }
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
    title: 'Pulse Energy - קמפיין לידים',
    category: 'website',
    url: 'https://pulsee.co.il',
    image: 'https://i.postimg.cc/tgHY22kP/pulsee_co_il.png',
    description: 'בניית משפך שיווקי מלא: דף נחיתה ממיר + קמפיין פייסבוק ואינסטגרם. תוצאה: ירידה של 35% בעלות לליד ועלייה באיכות הפניות.'
  },
  {
    id: 2,
    title: 'DTS Law - מיתוג וגיוס לקוחות',
    category: 'website',
    url: 'https://dts-law.co.il',
    image: 'https://i.postimg.cc/zf1V007h/dts_law_co_il.png',
    description: 'מיתוג מחדש ובניית אתר תדמית המשמש כבסיס לקמפיין גוגל חיפוש (Search). השגנו מקומות ראשונים בביטויים תחרותיים מאוד.'
  },
  {
    id: 3,
    title: 'BarBike - איקומרס ו-GMB',
    category: 'website',
    url: 'https://barbike.co.il',
    image: 'https://i.postimg.cc/VNcdDDg0/barbike_co_il.png',
    description: 'הקמת חנות איקומרס וחיבור לקטלוג פייסבוק וגוגל שופינג. אופטימיזציה ל-GMB הביאה לעלייה של 50% בשיחות טלפון מהמפה.'
  },
  {
    id: 4,
    title: 'Agro-Lima - חשיפה למותג',
    category: 'website',
    url: 'https://agrolima.co.il',
    image: 'https://i.postimg.cc/g0PnNNs6/agrolima_co_il.png',
    description: 'קמפיין מודעות (Awareness) ולידים לחברה חקלאית. יצירת סרטוני תדמית וקידום ממומן שהוביל לחשיפה של מעל 100K משתמשים רלוונטיים.'
  },
  {
    id: 5,
    title: 'Noa Law - תוכן וקידום',
    category: 'website',
    url: 'https://noa-law.co.il',
    image: 'https://i.postimg.cc/pdtpqqCr/noa_law_co_il.png',
    description: 'ניהול עמוד סושיאל עסקי וקידום פוסטים ממומנים. בניית אתר המותאם לקידום אורגני (SEO) שייצר זרם פניות קבוע ללא עלות מדיה.'
  },
  {
    id: 6,
    title: 'Porat Law - לידים ממוקדים',
    category: 'website',
    url: 'https://porat-law.co.il',
    image: 'https://i.postimg.cc/CKVzmm7Z/porat_law_co_il.png',
    description: 'קמפיין PPC ממוקד לקהל עסקי (B2B). שימוש בטופסי לידים (Lead Forms) בפייסבוק ואינטגרציה ל-CRM של הלקוח.'
  }
];