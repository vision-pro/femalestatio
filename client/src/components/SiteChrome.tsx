/**
 * Design system: "طقوس العناية الهادئة" — global navigation prioritizes calm, clear routing and the Female Station mark.
 */
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { assetUrl, WHATSAPP_NUMBER } from "@/lib/siteData";

const brandLogo = assetUrl("/manus-storage/female-station-original-logo_a2c4944b.jpg");
const brandMark = assetUrl("/manus-storage/female-station-mark_3be10351.png");

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenu = () => setOpenMenu(false);

  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-[#FBF7F3] text-[#392525]">
      <header className="relative z-50 border-b border-[#392525]/10 bg-[#FBF7F3]/92 backdrop-blur-xl">
        <div className="site-shell flex h-[82px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="محطة أنثى، الصفحة الرئيسية">
            <img src={brandLogo} alt="شعار محطة أنثى" className="h-12 w-12 rounded-[16px] object-cover shadow-[0_8px_20px_rgba(80,45,43,0.12)]" />
            <div className="leading-none"><span className="font-kufi block text-[15px] font-bold tracking-[-0.04em]">محطة أنثى</span><span className="mt-1 block font-sans text-[10px] tracking-[0.2em] text-[#98716A]">FEMALE STATION</span></div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#5E4542] lg:flex" aria-label="التنقل الرئيسي">
            <Link className="nav-link" href="/">عن المحطة</Link>
            <Link className="nav-link" href="/services/skin-care">الأقسام</Link>
            <Link className="nav-link" href="/doctors/maryam-saddam">الاختصاصيات</Link>
            <a className="nav-link" href="/#faq">الأسئلة الشائعة</a>
            <Link className="nav-link" href="/booking">حجز موعد</Link>
          </nav>

          <Link href="/booking" className="button-primary hidden sm:inline-flex">احجزي موعداً <MessageCircle className="h-4 w-4" /></Link>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#EEDBD5] text-[#6B423D] lg:hidden" onClick={() => setOpenMenu(true)} aria-label="فتح القائمة"><Menu className="h-5 w-5" /></button>
        </div>
      </header>

      {openMenu && <div className="fixed inset-0 z-[60] bg-[#392525]/35 backdrop-blur-sm lg:hidden"><div className="absolute inset-x-4 top-4 rounded-[28px] bg-[#FBF7F3] p-5 shadow-2xl"><div className="mb-8 flex items-center justify-between"><span className="font-kufi text-sm font-bold">اختاري وجهتكِ</span><button className="grid h-9 w-9 place-items-center rounded-full bg-[#F0E2DD]" onClick={closeMenu} aria-label="إغلاق القائمة"><X className="h-4 w-4" /></button></div><nav className="grid gap-1 text-right text-lg" aria-label="قائمة الجوال">{[["عن المحطة", "/"], ["الأقسام", "/services/skin-care"], ["الاختصاصيات", "/doctors/maryam-saddam"], ["حجز موعد", "/booking"]].map(([label, href]) => <Link key={href} href={href} onClick={closeMenu} className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#F0E2DD]">{label}</Link>)}<a href="/#faq" onClick={closeMenu} className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#F0E2DD]">الأسئلة الشائعة</a></nav></div></div>}
      {children}
      <footer className="border-t border-[#C98D82]/20 bg-[#FBF7F3] py-9"><div className="site-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><img src={brandMark} alt="رمز محطة أنثى" className="h-11 w-11 rounded-[13px] object-cover" /><div><p className="font-kufi text-sm font-bold">محطة أنثى</p><p className="mt-1 text-[10px] tracking-[0.17em] text-[#9A716A]">FEMALE STATION</p></div></div><p className="text-xs text-[#94736D]">حيثُ تُروى تفاصيلكِ بعناية.</p><div className="flex items-center gap-4"><a href="https://www.instagram.com/femalestation.njf/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#6A4843] transition-colors hover:text-[#C98D82]"><Instagram className="h-5 w-5" /></a><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="واتساب" className="text-[#6A4843] transition-colors hover:text-[#C98D82]"><MessageCircle className="h-5 w-5" /></a></div></div></footer>
    </main>
  );
}
