/**
 * Design system: "طقوس العناية الهادئة" — warm editorial wellness.
 * Clay-pink accents, editorial asymmetry, generous breathing room, and calm micro-interactions.
 */
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  Clock3,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";
import { doctors as team, services } from "@/lib/siteData";

const brandLogo = "/manus-storage/female-station-original-logo_a2c4944b.jpg";
const brandMark = "/manus-storage/female-station-mark_3be10351.png";
const heroImage = "/manus-storage/female-station-hero_657429cf.jpg";
const spaImage = "/manus-storage/female-station-spa_af829e4e.jpg";
const consultationImage = "/manus-storage/female-station-consultation_cfdeef04.jpg";
const movementImage = "/manus-storage/female-station-movement_2ac1ba66.jpg";

function SmallArrow() {
  return <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />;
}

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-[#FBF7F3] text-[#392525]">
      <header className="relative z-50 border-b border-[#392525]/10 bg-[#FBF7F3]/92 backdrop-blur-xl">
        <div className="site-shell flex h-[82px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3" aria-label="محطة أنثى، الصفحة الرئيسية">
            <img src={brandLogo} alt="شعار محطة أنثى" className="h-12 w-12 rounded-[16px] object-cover shadow-[0_8px_20px_rgba(80,45,43,0.12)]" />
            <div className="leading-none">
              <span className="font-kufi block text-[15px] font-bold tracking-[-0.04em]">محطة أنثى</span>
              <span className="mt-1 block font-sans text-[10px] tracking-[0.2em] text-[#98716A]">FEMALE STATION</span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#5E4542] lg:flex" aria-label="التنقل الرئيسي">
            <a className="nav-link" href="#about">عن المحطة</a>
            <a className="nav-link" href="#services">الأقسام</a>
            <a className="nav-link" href="#journey">تجربتكِ</a>
            <a className="nav-link" href="#team">الاختصاصيات</a>
            <a className="nav-link" href="#visit">زيارة المحطة</a>
          </nav>

          <a href="/booking" className="button-primary hidden sm:inline-flex">احجزي موعداً <MessageCircle className="h-4 w-4" /></a>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#EEDBD5] text-[#6B423D] lg:hidden" onClick={() => setOpenMenu(true)} aria-label="فتح القائمة">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {openMenu && (
        <div className="fixed inset-0 z-[60] bg-[#392525]/35 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-x-4 top-4 rounded-[28px] bg-[#FBF7F3] p-5 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-kufi text-sm font-bold">اختاري وجهتكِ</span>
              <button className="grid h-9 w-9 place-items-center rounded-full bg-[#F0E2DD]" onClick={closeMenu} aria-label="إغلاق القائمة"><X className="h-4 w-4" /></button>
            </div>
            <nav className="grid gap-1 text-right text-lg" aria-label="قائمة الجوال">
              {[
                ["عن المحطة", "#about"], ["الأقسام", "#services"], ["تجربتكِ", "#journey"], ["الاختصاصيات", "#team"], ["حجز موعد", "/booking"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="rounded-2xl px-4 py-3 transition-colors hover:bg-[#F0E2DD]">{label}</a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <section id="top" className="relative">
        <div className="site-shell grid items-stretch gap-8 py-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-14">
          <div className="hero-copy order-2 flex flex-col justify-between py-3 lg:order-1 lg:py-9">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> وجهتكِ النسائية المتكاملة في النجف</p>
              <h1 className="font-kufi mt-7 max-w-[700px] text-4xl font-bold leading-[1.36] tracking-[-0.065em] text-[#3A2725] sm:text-5xl xl:text-[62px] xl:leading-[1.38]">
                مكان واحد،<br />
                <span className="text-[#BF7F74]">لتفاصيلكِ كلّها.</span>
              </h1>
              <p className="mt-7 max-w-[550px] text-[16px] leading-8 text-[#6B5752] sm:text-lg">
                من العناية والصحة إلى الجمال والراحة، صُممت محطة أنثى لتمنح كل امرأة تجربة متصلة تُروى بعناية.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="/booking" className="button-primary">احجزي موعدكِ <MessageCircle className="h-4 w-4" /></a>
              <a href="#services" className="button-text">تعرّفي إلى الأقسام <ChevronDown className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="hero-media order-1 min-h-[420px] overflow-hidden bg-[#D8B0A8] sm:min-h-[550px] lg:order-2 lg:min-h-[620px]">
            <img src={heroImage} alt="مساحة عافية نسائية هادئة في محطة أنثى" className="h-full w-full object-cover object-left" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
              <div className="rounded-[20px] border border-white/25 bg-[#392525]/75 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="font-kufi text-[11px]">لأن تفاصيلكِ تستحق</p>
                <p className="mt-1 text-lg font-semibold">أن تُروى بعناية.</p>
              </div>
              <img src={brandMark} alt="رمز محطة أنثى" className="h-16 w-16 rounded-[18px] object-cover shadow-xl sm:h-20 sm:w-20" />
            </div>
            <span className="hero-stamp font-sans">NAJAF · IRAQ</span>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 sm:py-28">
        <div className="section-curve section-curve-top" />
        <div className="signature-motif motif-about" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="site-shell relative z-10 grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-sm">
            <p className="eyebrow"><span className="eyebrow-dot" /> فلسفتنا</p>
            <div className="mt-7 flex items-center gap-4">
              <img src={brandLogo} alt="شعار محطة أنثى" className="h-16 w-16 rounded-[20px] object-cover" />
              <p className="font-sans text-xs leading-5 tracking-[0.13em] text-[#8B6660]">FEMALE STATION<br />NAJAF, IQ</p>
            </div>
          </div>
          <div>
            <p className="font-kufi max-w-4xl text-2xl font-medium leading-[1.8] tracking-[-0.05em] text-[#4A302D] sm:text-3xl lg:text-[36px]">
              لسنا مجرد مركز خدمات. محطة أنثى هي مساحة تجمع ما تحتاجينه في يومكِ، ضمن تجربة <span className="text-[#BE7E73]">أنثوية، هادئة، ومتكاملة.</span>
            </p>
            <div className="mt-10 grid max-w-3xl gap-6 border-t border-[#C98D82]/25 pt-6 sm:grid-cols-3">
              <div><p className="font-sans text-3xl font-medium text-[#BF7F74]">01</p><p className="mt-2 text-sm text-[#664B47]">خصوصية وراحة</p></div>
              <div><p className="font-sans text-3xl font-medium text-[#BF7F74]">02</p><p className="mt-2 text-sm text-[#664B47]">عناية متصلة</p></div>
              <div><p className="font-sans text-3xl font-medium text-[#BF7F74]">03</p><p className="mt-2 text-sm text-[#664B47]">فريق قريب منكِ</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#3B2826] py-20 text-[#FFF9F4] sm:py-28">
        <div className="site-shell">
          <div className="signature-motif motif-services" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> أقسام المحطة</p>
              <h2 className="font-kufi mt-6 text-3xl font-bold leading-[1.5] tracking-[-0.06em] sm:text-4xl">كل احتياج،<br /><span className="text-[#E8B7AE]">له محطتهُ الخاصة.</span></h2>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-[#E8D8D2] lg:mr-auto">تنتقلين بين العناية والراحة والحركة والصحة بسلاسة، لأن الوقت الذي تمنحينه لنفسكِ يجب أن يكون مدروساً ومريحاً.</p>
          </div>

          <div className="station-route mt-14 border-t border-white/15 pt-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a key={service.number} href={`/services/${service.slug}`} className="station-item group">
                  <div className="station-number"><span className="font-sans">{service.number}</span><i /></div>
                  <div className="station-content">
                    <div className="flex items-center justify-between gap-4"><h3 className="font-kufi text-xl font-bold tracking-[-0.05em] sm:text-2xl">{service.title}</h3><Icon className="h-4 w-4 shrink-0 text-[#E6B6AE] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" aria-hidden="true" /></div>
                    <p className="mt-3 max-w-[430px] text-sm leading-7 text-[#DDCCC6]">{service.copy}</p>
                  </div>
                  <div className="station-tag"><span className="font-sans">STATION</span><ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" /></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="journey" className="py-20 sm:py-28">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-20">
          <div className="relative">
            <img src={consultationImage} alt="استشارة نسائية هادئة" className="h-[430px] w-full object-cover sm:h-[560px]" />
            <div className="absolute -bottom-5 -left-3 max-w-[270px] bg-[#C98D82] p-6 text-white sm:-left-8 sm:p-8">
              <p className="font-sans text-xs tracking-[0.2em] text-[#FFE5DF]">YOUR VISIT</p>
              <p className="font-kufi mt-3 text-lg font-bold leading-8">كل خطوة تبدأ بالاستماع إليكِ.</p>
            </div>
          </div>
          <div className="py-4 lg:py-12">
            <div className="signature-motif motif-journey" aria-hidden="true"><span /><span /><span /><span /></div>
            <p className="eyebrow"><span className="eyebrow-dot" /> كيف تبدأ التجربة؟</p>
            <h2 className="font-kufi mt-6 text-3xl font-bold leading-[1.6] tracking-[-0.06em] text-[#4A302D] sm:text-4xl">رعاية متكاملة،<br /><span className="text-[#BF7F74]">بطريقة أبسط.</span></h2>
            <div className="mt-10 border-t border-[#C98D82]/25">
              {[
                ["01", "تواصلي وحددي احتياجكِ", "ابدئي برسالة أو اتصال، ودعينا نرشدكِ إلى القسم المناسب."],
                ["02", "زيارة مريحة واستشارة واضحة", "نتعرف إلى ما تحتاجينه قبل اختيار أي خدمة أو باقة."],
                ["03", "رحلة عناية تشبهكِ", "تنتقلين في محطة واحدة بين الخدمات التي تدعم راحتكِ."],
              ].map(([number, title, copy]) => (
                <div key={number} className="grid grid-cols-[45px_1fr] gap-4 border-b border-[#C98D82]/25 py-6">
                  <span className="font-sans text-sm tracking-[0.1em] text-[#BF7F74]">{number}</span>
                  <div><h3 className="font-kufi text-[15px] font-bold tracking-[-0.03em] text-[#4E3330]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#755C57]">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0E0DB] py-16 sm:py-20">
        <div className="site-shell grid items-center gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow"><span className="eyebrow-dot" /> مساحة للحركة</p>
            <h2 className="font-kufi mt-6 text-3xl font-bold leading-[1.6] tracking-[-0.06em] text-[#4A302D] sm:text-4xl">قوتكِ جزء من<br /><span className="text-[#B7756B]">توازنكِ اليومي.</span></h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[#775A55]">في الجيم النسائي، نؤمن أن الحركة وقت لكِ. مساحة خاصة، وطاقة تدعم يومكِ بالطريقة التي تناسبكِ.</p>
            <a href="#visit" className="button-text mt-8">تعرّفي إلى الجيم <SmallArrow /></a>
          </div>
          <div className="order-1 overflow-hidden lg:order-2"><img src={movementImage} alt="امرأة في الجيم النسائي بمحطة أنثى" className="h-[370px] w-full object-cover sm:h-[460px]" /></div>
        </div>
      </section>

      <section id="team" className="py-20 sm:py-28">
        <div className="site-shell">
          <div className="signature-motif motif-team" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> فريق المحطة</p><h2 className="font-kufi mt-6 text-3xl font-bold leading-[1.55] tracking-[-0.06em] text-[#4A302D] sm:text-4xl">وجوه تثقين بها،<br /><span className="text-[#BF7F74]">عناية قريبة منكِ.</span></h2></div>
            <p className="max-w-xl text-[15px] leading-8 text-[#735954] lg:mr-auto">تعرّفي إلى اختصاصيات محطة أنثى، واسألي عن القسم المناسب قبل زيارتكِ. الاستشارة الواضحة هي بداية الرحلة.</p>
          </div>
          <div className="mt-12 grid gap-px bg-[#D6B5AC] sm:grid-cols-2 lg:grid-cols-5">
            {team.map((doctor, index) => (
              <a href={`/doctors/${doctor.slug}`} key={doctor.slug} className="group min-h-[188px] bg-[#FBF7F3] p-6 transition-colors duration-300 hover:bg-[#F0E0DB]">
                <span className="font-sans text-xs tracking-[0.16em] text-[#BF7F74]">0{index + 1}</span>
                <div className="mt-11 flex h-11 w-11 items-center justify-center rounded-full bg-[#E3C2BA] text-[#6B423D] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"><ShieldCheck className="h-5 w-5" /></div>
                <h3 className="font-kufi mt-4 text-[14px] font-bold tracking-[-0.04em] text-[#4A302D]">{doctor.name}</h3>
                <p className="mt-2 text-xs text-[#8B6D67]">اعرفي المزيد <ChevronLeft className="mr-1 inline h-3 w-3" /></p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#6D4742] py-20 text-white sm:py-28">
        <div className="absolute inset-y-0 left-0 hidden w-[42%] lg:block"><img src={spaImage} alt="تفاصيل من طقوس السبا" className="h-full w-full object-cover opacity-55 mix-blend-luminosity" /><div className="absolute inset-0 bg-[#6D4742]/25" /></div>
        <div className="site-shell relative z-10 lg:mr-[42%] lg:max-w-none lg:px-14">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> لحظتكِ الخاصة</p>
          <h2 className="font-kufi mt-7 max-w-3xl text-3xl font-bold leading-[1.65] tracking-[-0.065em] sm:text-4xl lg:text-[45px]">امنحي نفسكِ الوقت<br /><span className="text-[#F0BEB5]">الذي تستحقه.</span></h2>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#F4E2DE]">الراحة ليست تفصيلاً جانبياً. في محطة أنثى، نمنحها مكاناً حقيقياً في يومكِ.</p>
          <a href="https://www.instagram.com/femalestation.njf/" target="_blank" rel="noreferrer" className="button-cream mt-9">شاهدي يوميات المحطة <Instagram className="h-4 w-4" /></a>
        </div>
      </section>

      <section id="visit" className="py-20 sm:py-28">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-l border-[#C98D82]/30 pl-0 lg:pl-14">
            <div className="signature-motif motif-visit" aria-hidden="true"><span /><span /><span /><span /></div>
            <p className="eyebrow"><span className="eyebrow-dot" /> زيارة المحطة</p>
            <h2 className="font-kufi mt-6 text-3xl font-bold leading-[1.6] tracking-[-0.06em] text-[#4A302D] sm:text-4xl">محطتكِ أقرب<br /><span className="text-[#BF7F74]">مما تتخيلين.</span></h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-[#725954]">نستقبلكِ في شارع الزهور، مجاور سويت تايم، النجف. تواصلي معنا وسنرشدكِ إلى القسم المناسب لزيارتكِ.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <a href="tel:+9647833000894" className="info-card group"><MessageCircle className="h-5 w-5" /><span><small>اتصال وحجز</small><strong dir="ltr">0783 300 0894</strong></span><ChevronLeft className="mr-auto h-4 w-4 transition-transform group-hover:-translate-x-1" /></a>
              <a href="https://www.instagram.com/femalestation.njf/" target="_blank" rel="noreferrer" className="info-card group"><Instagram className="h-5 w-5" /><span><small>إنستغرام</small><strong>@femalestation.njf</strong></span><ChevronLeft className="mr-auto h-4 w-4 transition-transform group-hover:-translate-x-1" /></a>
            </div>
          </div>
          <div className="relative min-h-[355px] overflow-hidden bg-[#E5CBC4] p-7 sm:min-h-[420px] sm:p-10">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#80564f 1px, transparent 1px)", backgroundSize: "19px 19px" }} />
            <div className="relative flex h-full flex-col justify-between border border-[#815750]/35 p-7 sm:p-10">
              <div className="flex items-start justify-between"><MapPin className="h-8 w-8 text-[#7A4A44]" /><span className="font-sans text-xs tracking-[0.2em] text-[#795650]">NAJAF · 54001</span></div>
              <div><p className="font-kufi max-w-sm text-xl font-bold leading-9 tracking-[-0.05em] text-[#4B302D]">شارع الزهور،<br />مجاور سويت تايم.</p><div className="mt-6 flex items-center gap-3 text-sm text-[#75544F]"><Clock3 className="h-4 w-4" /><span>تواصلي معنا لتأكيد مواعيد القسم المناسب.</span></div></div>
              <a href="https://www.google.com/maps/search/?api=1&query=Female+Station+Najaf+Iraq" target="_blank" rel="noreferrer" className="button-dark w-fit">افتحي الخريطة <SmallArrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#C98D82]/20 bg-[#FBF7F3] py-9">
        <div className="site-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><img src={brandMark} alt="رمز محطة أنثى" className="h-11 w-11 rounded-[13px] object-cover" /><div><p className="font-kufi text-sm font-bold">محطة أنثى</p><p className="mt-1 text-[10px] tracking-[0.17em] text-[#9A716A]">FEMALE STATION</p></div></div>
          <p className="text-xs text-[#94736D]">حيثُ تُروى تفاصيلكِ بعناية.</p>
          <div className="flex items-center gap-4"><a href="https://www.instagram.com/femalestation.njf/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#6A4843] transition-colors hover:text-[#C98D82]"><Instagram className="h-5 w-5" /></a><a href="#top" className="text-xs text-[#6A4843] transition-colors hover:text-[#C98D82]">إلى الأعلى</a></div>
        </div>
      </footer>
    </main>
  );
}
