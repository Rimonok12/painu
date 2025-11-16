import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <div className="w-9 h-9 relative">
            <Image
              src="/logo.jpeg"
              alt="Pain University Logo"
              fill
              className="object-cover rounded-full"
            />
          </div>

          <span className="heading tracking-[0.15em] text-sm">PAINU.INFO</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#clips" className="hover:text-brand">
            Clips
          </a>
          <a href="#gallery" className="hover:text-brand">
            Gallery
          </a>
          <a href="#pricing" className="hover:text-brand">
            Pricing
          </a>
          <a href="#contact" className="hover:text-brand">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
