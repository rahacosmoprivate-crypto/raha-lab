export const LANGS = ["en","fa","ar"] as const;
export type Lang = typeof LANGS[number];
export const isLang = (x?: string): x is Lang => !!x && (LANGS as readonly string[]).includes(x);
export const dir = (lang: Lang) => (lang === "en" ? "ltr" : "rtl");

export const t = {
  en:{
    brand:"RAHA LAB",
    tagline:"Biotech-grade ingredients & formulation intelligence",
    home:"Home",
    ingredients:"Ingredients",
    formulations:"Formulations",
    news:"News",
    downloads:"Download Area",
    contact:"Contact",
    search:"Search",
    filters:"Filters",
    apply:"Apply",
    clear:"Clear",
    view:"View",
    explore:"Explore",
    featured:"Featured",
    latest:"Latest",
    cta_catalogue:"Download catalogue",
    cta_contact:"Talk to our team",
    meta_title:"Scientific ingredients, formulation solutions & technical support",
    meta_desc:"RAHA LAB provides high-performance raw materials and formulation know-how for modern cosmetics."
  },
  fa:{
    brand:"RAHA LAB",
    tagline:"مواد اولیه بیوتک و دانش فرمولاسیون در سطح جهانی",
    home:"خانه",
    ingredients:"مواد اولیه",
    formulations:"فرمولاسیون‌ها",
    news:"اخبار",
    downloads:"دانلودها",
    contact:"تماس",
    search:"جستجو",
    filters:"فیلترها",
    apply:"اعمال",
    clear:"پاک کردن",
    view:"مشاهده",
    explore:"کاوش",
    featured:"منتخب",
    latest:"جدیدترین",
    cta_catalogue:"دانلود کاتالوگ",
    cta_contact:"ارتباط با تیم فنی",
    meta_title:"مواد اولیه تخصصی، راهکارهای فرمولاسیون و پشتیبانی فنی",
    meta_desc:"RAHA LAB تأمین‌کننده مواد اولیه پرفورمنس و دانش فرمولاسیون برای محصولات مراقبت پوست و مو."
  },
  ar:{
    brand:"RAHA LAB",
    tagline:"مواد خام بتقنية حيوية ومعرفة تركيبات بمستوى عالمي",
    home:"الرئيسية",
    ingredients:"المواد الخام",
    formulations:"التركيبات",
    news:"الأخبار",
    downloads:"التنزيلات",
    contact:"اتصال",
    search:"بحث",
    filters:"الفلاتر",
    apply:"تطبيق",
    clear:"مسح",
    view:"عرض",
    explore:"استكشاف",
    featured:"مميز",
    latest:"الأحدث",
    cta_catalogue:"تحميل الكتالوج",
    cta_contact:"تواصل مع الفريق",
    meta_title:"مواد خام متقدمة وحلول تركيبات ودعم تقني",
    meta_desc:"RAHA LAB توفر مواد خام عالية الأداء ومعرفة تركيبات لمنتجات العناية بالبشرة والشعر."
  }
} as const;

export const swapLang = (pathname:string, next:Lang) => {
  const s=(pathname||"/").replace(/^\/(en|fa|ar)(?=\/|$)/,"");
  return `/${next}${s || "/"}`;
};
