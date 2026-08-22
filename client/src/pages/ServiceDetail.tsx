/**
 * Design system: "طقوس العناية الهادئة" — editorial service pages show a calm station, clear next steps, and no clinical overclaims.
 */
import { ArrowLeft, Check, MessageCircle, MoveLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import SiteChrome from "@/components/SiteChrome";
import { getService, services } from "@/lib/siteData";

const serviceImages: Record<string, string> = {
  "skin-care": "/manus-storage/female-station-consultation_cfdeef04.jpg",
  "spa-salon": "/manus-storage/female-station-spa_af829e4e.jpg",
  "women-gym": "/manus-storage/female-station-movement_2ac1ba66.jpg",
  "womens-care": "/manus-storage/female-station-consultation_cfdeef04.jpg",
  "lab-pharmacy": "/manus-storage/female-station-spa_af829e4e.jpg",
  "laser-injections": "/manus-storage/female-station-consultation_cfdeef04.jpg",
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = getService(params?.slug ?? "");
  if (!service) return <SiteChrome><section className="empty-page site-shell"><p className="eyebrow"><span className="eyebrow-dot" /> صفحة غير متاحة</p><h1 className="font-kufi mt-6 text-3xl font-bold">لم نجد هذه المحطة.</h1><Link href="/" className="button-primary mt-8">العودة للرئيسية <ArrowLeft className="h-4 w-4" /></Link></section></SiteChrome>;
  const Icon = service.icon;
  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];
  return <SiteChrome><section className="page-hero page-hero-dark"><div className="signature-motif motif-page-light" aria-hidden="true"><span /><span /><span /><span /></div><div className="site-shell relative z-10 grid items-end gap-9 lg:grid-cols-[1fr_.48fr]"><div><Link href="/" className="back-link back-link-light"><ArrowLeft className="h-4 w-4" /> العودة إلى المحطة</Link><div className="mt-14 flex items-end justify-between gap-6"><div><p className="font-sans text-sm tracking-[0.22em] text-[#E8B7AE]">STATION {service.number}</p><h1 className="font-kufi mt-5 text-3xl font-bold leading-[1.6] tracking-[-0.065em] sm:text-5xl">{service.title}</h1></div><Icon className="mb-2 h-12 w-12 text-[#E8B7AE] sm:h-16 sm:w-16" /></div></div><div className="service-hero-image"><img src={serviceImages[service.slug]} alt={`تفاصيل هادئة من ${service.title}`} /><div className="service-image-seal"><span>STATION</span><strong>{service.number}</strong></div></div></div></section><section className="pb-20 sm:pb-28"><div className="site-shell grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20"><div><p className="font-kufi text-2xl font-bold leading-[1.8] tracking-[-0.055em] text-[#4A302D] sm:text-3xl">{service.promise}</p><p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#735954]">هذه الصفحة تقدم تعريفاً عاماً بالقسم كما يظهر في خدمات محطة أنثى. اختيار الخدمة أو الإجراء المناسب يحدده الفريق بعد الاستشارة والتقييم الملائم للحالة.</p><div className="service-divider mt-10"><span>العناية تبدأ بخطوة</span><i /></div><div className="mt-6 grid gap-px bg-[#D6B5AC] sm:grid-cols-3">{service.points.map((point, i) => <div key={point} className="bg-[#FBF7F3] p-5"><span className="font-sans text-xs tracking-[0.18em] text-[#BF7F74]">0{i + 1}</span><p className="font-kufi mt-7 text-xs font-bold leading-6 text-[#4B302D]">{point}</p></div>)}</div></div><aside className="service-cta"><div className="signature-motif motif-cta" aria-hidden="true"><span /><span /><span /><span /></div><p className="relative z-10 font-sans text-xs tracking-[0.2em] text-[#BF7F74]">READY WHEN YOU ARE</p><h2 className="relative z-10 font-kufi mt-5 text-xl font-bold leading-9 text-[#4A302D]">ابدئي باستشارة واضحة.</h2><p className="relative z-10 mt-4 text-sm leading-7 text-[#765A55]">أرسلي طلباً منظماً، وسيساعدكِ الفريق في تأكيد الموعد والقسم الأنسب.</p><Link href="/booking" className="button-primary relative z-10 mt-8">احجزي لهذا القسم <MessageCircle className="h-4 w-4" /></Link></aside></div></section><section className="border-t border-[#C98D82]/20 bg-[#F0E0DB] py-10"><div className="site-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-xs text-[#9A716A]">المحطة التالية</p><p className="font-kufi mt-2 text-sm font-bold">{next.title}</p></div><Link href={`/services/${next.slug}`} className="button-text">استكشفيها <MoveLeft className="h-4 w-4" /></Link></div></section></SiteChrome>;
}
