/**
 * Content model: official public services and doctor names only.
 * Individual specialties and experience fields remain explicitly pending until approved by Female Station management.
 */
import type { LucideIcon } from "lucide-react";
import { Dumbbell, FlaskConical, HeartPulse, Scissors, Sparkles, Stethoscope } from "lucide-react";

export const WHATSAPP_NUMBER = "9647833000894";

export type Service = {
  slug: string;
  number: string;
  title: string;
  copy: string;
  promise: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "skin-care", number: "01", title: "العناية والجلدية", copy: "استشارة دقيقة ومسار عناية يناسب احتياج بشرتكِ.", promise: "مساحة هادئة لفهم احتياج بشرتكِ قبل اختيار مسار العناية.", points: ["استشارة أولية", "تنظيف البشرة", "متابعة مسار العناية"], icon: Sparkles },
  { slug: "spa-salon", number: "02", title: "السبا والصالون", copy: "لحظات هادئة لاستعادة توازنكِ وجمالكِ الطبيعي.", promise: "وقت خاص يجمع الاسترخاء والعناية في أجواء دافئة ومدروسة.", points: ["طقوس السبا", "جلسات الاسترخاء", "خدمات الصالون"], icon: Scissors },
  { slug: "women-gym", number: "03", title: "الجيم النسائي", copy: "مساحة حركة خاصة تمنحكِ طاقة تشبهكِ.", promise: "مساحة نسائية مخصصة للحركة والروتين اليومي المتوازن.", points: ["بيئة نسائية خاصة", "مساحة للحركة", "استفسارات الاشتراك"], icon: Dumbbell },
  { slug: "womens-care", number: "04", title: "النسائية والتجميل", copy: "رعاية متخصصة في بيئة تضع راحتكِ أولاً.", promise: "رعاية تقدم في بيئة تحترم الخصوصية وتبدأ بالاستماع إليكِ.", points: ["استشارة قبل الخدمة", "خصوصية وراحة", "تواصل واضح للحجز"], icon: HeartPulse },
  { slug: "lab-pharmacy", number: "05", title: "المختبر والصيدلية", copy: "خدمات مساندة تجعل رحلتكِ أكثر سهولة وتكاملاً.", promise: "خدمات داعمة تجعل الوصول إلى احتياجاتكِ اليومية أكثر سهولة في مكان واحد.", points: ["خدمات المختبر", "قسم الصيدلية", "استفسارات التوفر"], icon: FlaskConical },
  { slug: "laser-injections", number: "06", title: "الليزر والحقن", copy: "خيارات تجميلية تُناقش بعناية بعد تقييم مناسب.", promise: "تبدأ كل خطوة بتقييم واستشارة، لأن الخيار المناسب يختلف من حالة إلى أخرى.", points: ["استشارة قبل الإجراء", "قسم الليزر", "خدمات الحقن التجميلي"], icon: Stethoscope },
];

export const doctors = [
  { slug: "maryam-saddam", name: "د. مريم صدام" },
  { slug: "hanin-alsaabri", name: "د. حنين السعبري" },
  { slug: "asawer-alaredi", name: "د. أساور العارضي" },
  { slug: "maryam-alwaeli", name: "د. مريم الوائلي" },
  { slug: "najlaa-albayati", name: "د. نجلاء البياتي" },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
export const getDoctor = (slug: string) => doctors.find((doctor) => doctor.slug === slug);
