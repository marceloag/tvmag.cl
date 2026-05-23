import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'TvMag — Televisión de Magallanes en Vivo',
  description:
    'Disfruta de los canales de la región de Magallanes y Antártica Chilena en vivo, gratis, desde tu celular, tablet o computador.',
};

/* ─── Static channel data for homepage showcase ─────────── */
const FEATURED_CHANNELS = [
  { name: 'Sur TV',         logo: '/canales/surtv.png' },
  { name: 'ITV',            logo: '/canales/itv.png' },
  { name: 'CDR',            logo: '/canales/cdr.png' },
  { name: 'UMAG TV',        logo: '/canales/umagtv.jpeg' },
  { name: 'Eva Visión',     logo: '/canales/evavision.png' },
  { name: 'EP',             logo: '/canales/ep.jpeg' },
  { name: 'Classic Channel',logo: '/canales/classicchannel.jpeg' },
  { name: 'Soberanía',      logo: '/canales/soberania.png' },
  { name: 'CTV 35',         logo: '/canales/ctv35.png' },
  { name: 'EGM',            logo: '/canales/egm.jpeg' },
  { name: 'Music PUQ',      logo: '/canales/musicpuq.jpg' },
  { name: 'Ibañez TV',      logo: '/canales/ibanez.webp' },
];

/* ─── Play Store SVG ────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 15 15" aria-hidden="true">
      <path
        fill="currentColor"
        d="m1.5.5.252-.432A.5.5 0 0 0 1 .5h.5Zm0 14H1a.5.5 0 0 0 .752.432L1.5 14.5Zm12-7 .252.432a.5.5 0 0 0 0-.864L13.5 7.5ZM1 .5v14h1V.5H1Zm.752 14.432 12-7-.504-.864-12 7 .504.864Zm12-7.864-12-7-.504.864 12 7 .504-.864ZM1.829 12.876l8-7-.658-.752-8 7 .658.752Zm-.658-10 8 7 .658-.752-8-7-.658.752Z"
      />
    </svg>
  );
}

/* ─── Live badge ────────────────────────────────────────── */
function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
      <span className="live-dot w-1.5 h-1.5 bg-rose-400 rounded-full inline-block" />
      En Vivo
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06090f] overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Aurora Background ─────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="aurora-orb-1 absolute rounded-full opacity-30 blur-3xl"
          style={{
            width: '70vw', height: '70vw',
            top: '-20%', left: '-15%',
            background: 'radial-gradient(circle, #7b2fff 0%, transparent 70%)',
          }}
        />
        <div
          className="aurora-orb-2 absolute rounded-full opacity-25 blur-3xl"
          style={{
            width: '60vw', height: '60vw',
            top: '10%', right: '-20%',
            background: 'radial-gradient(circle, #00d4c8 0%, transparent 70%)',
          }}
        />
        <div
          className="aurora-orb-3 absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: '50vw', height: '50vw',
            bottom: '-10%', left: '30%',
            background: 'radial-gradient(circle, #ff3b7f 0%, transparent 70%)',
          }}
        />
        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* ── Navbar ───────────────────────────────────────── */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-5 animate-fade-in">
        <div className="flex items-center gap-3">
          <Image src="/tvmag.svg" alt="TvMag logo" width={44} height={44} priority />
          <span
            className="text-white font-bold text-lg tracking-tight hidden sm:block"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            TvMag
          </span>
        </div>

        <div className="flex items-center gap-3">
          <LiveBadge />
          <Link
            href="/app"
            id="nav-ver-online"
            className="glass rounded-full px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            📺 Ver Online
          </Link>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative z-10 min-h-[88vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 pb-10 pt-2 w-full max-w-7xl mx-auto">

        {/* Left: Text + CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-5 lg:gap-7 text-center lg:text-left max-w-2xl w-full">

          <div className="animate-fade-up flex flex-col items-center lg:items-start gap-4">
            <span
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-[#00d4c8] tracking-widest uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="live-dot w-1.5 h-1.5 bg-[#00d4c8] rounded-full" />
              La tv de Magallanes, donde estés
            </span>

            <h1
              className="text-[clamp(3rem,10vw,6rem)] font-black leading-[0.92] tracking-[-0.04em] text-white"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900 }}
            >
              Televisión
              <br />
              <span className="gradient-text">Regional</span>
              <br />
              en Vivo.
            </h1>
          </div>

          <p className="animate-fade-up delay-200 text-white/60 text-base md:text-lg leading-relaxed max-w-md">
            Todos los canales de Magallanes, gratis y al instante — en tu celular, tablet o TV.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link
              href="/app"
              id="hero-ver-online"
              className="group relative overflow-hidden rounded-2xl px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(123,47,255,0.5)] flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #7b2fff 0%, #ff3b7f 100%)',
              }}
            >
              <span aria-hidden="true" style={{ lineHeight: 1 }}>📺</span>
              <span className="relative z-10">Ver Online Gratis</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #9b4fff 0%, #ff5b9f 100%)' }}
              />
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
              id="hero-google-play"
              className="glass rounded-2xl px-6 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <PlayIcon />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-xs text-white/50 font-normal">Disponible en</span>
                <span className="font-bold">Google Play</span>
              </div>
            </a>
          </div>

          {/* Social proof */}
          <div className="animate-fade-up delay-400 flex items-center gap-3 text-sm text-white/40">
            <div className="flex -space-x-2">
              {['#7b2fff','#00d4c8','#ff3b7f','#ffaa00'].map((c, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[#06090f]"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm">Canales de toda la región, siempre en vivo</span>
          </div>
        </div>

        {/* Right: Floating phone mockup */}
        <div className="flex-shrink-0 animate-fade-in delay-300 w-full lg:w-auto flex justify-center">
          <div className="float relative">
            {/* Glow halo behind the phone */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, #7b2fff 0%, #00d4c8 50%, transparent 80%)',
                transform: 'scale(0.9)',
              }}
            />
            <Image
              src="/3dhand.png"
              alt="App TvMag en un celular mostrando canales en vivo"
              width={420}
              height={420}
              priority
              className="relative drop-shadow-2xl"
              style={{ width: 'min(340px, 72vw)', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* ── Channel Logo Marquee ──────────────────────────── */}
      <div className="relative z-10 py-6 overflow-hidden border-y border-white/[0.06]" aria-label="Canales disponibles">
        <p className="text-center text-xs text-white/30 uppercase tracking-[0.25em] mb-5 font-semibold"
           style={{ fontFamily: "'Syne', sans-serif" }}>
          Canales disponibles
        </p>
        <div className="relative overflow-hidden flex marquee-container gap-6">
          <div className="flex gap-6 marquee-track shrink-0">
            {FEATURED_CHANNELS.map((ch, i) => (
              <div
                key={`ch-1-${i}`}
                className="glass rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                title={ch.name}
              >
                <Image
                  src={ch.logo}
                  alt={ch.name}
                  width={44}
                  height={44}
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 marquee-track shrink-0" aria-hidden="true">
            {FEATURED_CHANNELS.map((ch, i) => (
              <div
                key={`ch-2-${i}`}
                className="glass rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                title={ch.name}
              >
                <Image
                  src={ch.logo}
                  alt={ch.name}
                  width={44}
                  height={44}
                  className="rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 pointer-events-none z-20"
               style={{ background: 'linear-gradient(to right, #06090f, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-20 pointer-events-none z-20"
               style={{ background: 'linear-gradient(to left, #06090f, transparent)' }} />
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Todo lo que necesitas, <span className="gradient-text">sin complicaciones</span>
          </h2>
          <p className="text-center text-white/50 mb-14 max-w-xl mx-auto">
            Diseñado para que disfrutes la televisión magallánica donde estés.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center">
            {[
              {
                icon: '📡',
                title: 'En Vivo',
                desc: 'Transmisiones en tiempo real de los principales canales de Magallanes.',
                accent: '#00d4c8',
              },
              {
                icon: '🆓',
                title: '100% Gratis',
                desc: 'Sin suscripciones ni pagos ocultos. Televisión regional para todos.',
                accent: '#7b2fff',
              },
              {
                icon: '📱',
                title: 'En Todo Dispositivo',
                desc: 'Celular, tablet, computador o TV Box. Donde estés, TvMag te acompaña.',
                accent: '#ff3b7f',
              },
            ].map(({ icon, title, desc, accent }) => (
              <div
                key={title}
                className="glass-strong rounded-3xl p-7 flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300 items-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                >
                  {icon}
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">{desc}</p>
                <div className="w-8 h-0.5 rounded-full mt-auto" style={{ background: accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Channel Showcase ──────────────────────────────── */}
      <section className="relative z-10 py-20 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Canales <span className="gradient-text">destacados</span>
              </h2>
              <p className="text-white/50 text-sm">Selección de la programación regional</p>
            </div>
            <Link
              href="/app"
              id="channels-ver-todos"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#00d4c8] hover:text-white transition-colors duration-200"
            >
              Ver todos <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {FEATURED_CHANNELS.map((ch, i) => (
              <Link
                key={i}
                href="/app"
                id={`channel-${ch.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 p-3 hover:bg-white/10 hover:scale-105 hover:border-white/25 transition-all duration-300 group"
              >
                <Image
                  src={ch.logo}
                  alt={ch.name}
                  width={48}
                  height={48}
                  className="rounded-xl object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-white/50 text-[9px] font-medium text-center leading-tight">
                  {ch.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex sm:hidden justify-center mt-8">
            <Link href="/app" id="channels-ver-todos-mobile"
              className="glass rounded-full px-6 py-2.5 text-sm font-semibold text-[#00d4c8]">
              Ver todos los canales →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Download CTA ──────────────────────────────────── */}
      <section className="relative z-10 py-20 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="glass-strong rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 20% 50%, #7b2fff 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #00d4c8 0%, transparent 60%)',
              }}
            />

            <div className="flex-1 text-center md:text-left relative z-10">
              <p className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-3"
                 style={{ fontFamily: "'Syne', sans-serif" }}>
                Llévala contigo
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Descarga la app <br />
                <span className="gradient-text">totalmente gratis</span>
              </h2>
              <p className="text-white/55 max-w-sm md:mx-0 mx-auto">
                Disponible para Android. Lleva la TV de Magallanes en tu bolsillo.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
                id="cta-google-play"
                className="group flex items-center gap-4 rounded-2xl px-8 py-5 text-white font-bold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_40px_rgba(123,47,255,0.4)]"
                style={{ background: 'linear-gradient(135deg, #7b2fff 0%, #ff3b7f 100%)' }}
              >
                <PlayIcon />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xs text-white/70 font-normal">Descarga en</span>
                  <span className="text-xl">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="relative z-10 py-10 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/tvmag.svg" alt="TvMag" width={28} height={28} />
            <span className="text-white/40 text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              TvMag — Televisión de Magallanes
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <Link href="/app" className="hover:text-white/70 transition-colors">Ver canales</Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
              className="hover:text-white/70 transition-colors"
            >
              Google Play
            </a>
          </div>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} TvMag. Punta Arenas, Chile.
          </p>
        </div>
      </footer>

    </div>
  );
}
