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
    name: 'Pulse Energy',
    role: 'הנהלת החברה',
    content: 'תהליך העבודה מול עדן היה סופר מקצועי. האתר החדש משקף בדיוק את החדשנות שאנחנו מביאים לעולם ההנדסה, עם חווית משתמש ברמה הגבוהה ביותר.',
    image: 'https://ui-avatars.com/api/?name=Pulse+Energy&background=0D8ABC&color=fff'
  },
  {
    id: 2,
    name: 'עו"ד תעבורה דניאל תמיר סער',
    role: 'DTS Law Firm',
    content: 'חיפשנו אתר שישדר יוקרה ואמינות למשרד עורכי הדין שלנו. התוצאה הסופית מרשימה, נקייה ומקצועית, והלקוחות שלנו לא מפסיקים להחמיא.',
    image: 'https://ui-avatars.com/api/?name=DTS+Law&background=1e293b&color=fff'
  },
  {
    id: 3,
    name: 'Agro-Lima',
    role: 'צוות החברה',
    content: 'עדן הקים עבורנו אתר תדמית מדויק שמציג את הפעילות שלנו בצורה ברורה ומזמינה. השירות היה מהיר, קשוב ומקצועי לאורך כל הדרך.',
    image: 'https://ui-avatars.com/api/?name=Agro+Lima&background=16a34a&color=fff'
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
  'https://i.postimg.cc/2S6ShByv/1.jpg', // Original: https://i.postimg.cc/2S6ShByv/1.jpg
  'https://i.postimg.cc/bwBNTNS2/2.jpg', // Original: https://i.postimg.cc/bwBNTNS2/2.jpg
  'https://i.postimg.cc/7ZWYVYJG/3.jpg', // Original: https://i.postimg.cc/7ZWYVYJG/3.jpg
  'https://i.postimg.cc/vZNHzHx4/4.jpg', // Original: https://i.postimg.cc/vZNHzHx4/4.jpg
  'https://i.postimg.cc/t4MC5Cn1/5.jpg', // Original: https://i.postimg.cc/t4MC5Cn1/5.jpg
  'https://i.postimg.cc/dVxtBtZG/6.jpg', // Original: https://i.postimg.cc/dVxtBtZG/6.jpg
  'https://i.postimg.cc/T34Y9Y5q/8.jpg', // Original: https://i.postimg.cc/T34Y9Y5q/8.jpg
];

// Note: Please capture screenshots or save images to '/images/projects/' folder in your project
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Pulse Energy Agency',
    category: 'website',
    url: 'https://pulsee.co.il',
    image: 'https://edendolev.varcel.app/images/pulsee.jpg', // Was: thum.io screenshot
    description: 'אתר תדמית חדשני לסוכנות פולס המתמחה בהנדסה בתחום הבניין, אתר התדמית משלב אנימציות מתקדמות וחווית משתמש ייחודית ומושכת.'
  },
  {
    id: 2,
    title: 'DTS Law Firm',
    category: 'website',
    url: 'https://dts-law.co.il',
    image: 'https://edendolev.varcel.app/images/dts-law.jpg', // Was: thum.io screenshot
    description: 'אתר יוקרתי למשרד עורכי דין, המשדר אמינות ומקצועיות עם דגש על נגישות ללקוח.'
  },
  {
    id: 3,
    title: 'Agro-Lima',
    category: 'website',
    url: 'https://agrolima.co.il',
    image: 'https://edendolev.varcel.app/images/agrolima.png', // Was: thum.io screenshot
    description: 'אתר תדמית לחברת אגרו-לימה, המציג את שירותי החברה בעיצוב נקי, מקצועי ומותאם לקהל היעד.'
  },
  {
    id: 4,
    title: 'Noa Law',
    category: 'website',
    url: 'https://noa-law.co.il',
    image: 'https://edendolev.varcel.app/images/noa-law.jpg', // Was: thum.io screenshot
    description: 'נוכחות דיגיטלית מרשימה לעורכת דין, כולל עיצוב נקי, אזור מאמרים ובלוג משפטי מקצועי.'
  },
  {
    id: 5,
    title: 'BarBike',
    category: 'website',
    url: 'https://barbike.co.il',
    image: 'https://edendolev.varcel.app/images/barbike.jpg', // Was: thum.io screenshot
    description: 'חנות אונליין (E-com) למותג אופניים, הכוללת קטלוג מוצרים חכם וממשק רכישה מהיר ומאובטח.'
  },
  {
    id: 6,
    title: 'Porat Law',
    category: 'website',
    url: 'https://porat-law.co.il',
    image: 'https://edendolev.varcel.app/images/porat-law.jpg', // Was: thum.io screenshot
    description: 'אתר תדמית נקי ומודרני למשרד עורכי דין, הבנוי בצורה אופטימלית לקידום אורגני בגוגל (SEO).'
  }
];