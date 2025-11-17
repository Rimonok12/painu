const links = [
  { label: 'HOME', href: '#top' },
  { label: 'WHO WE ARE', href: '#who-we-are' },
  { label: 'HOW WE TRAIN', href: '#how-we-train' },
  // { label: 'ATHLETES', href: '#athletes' },
  { label: 'PRIVATE', href: '#what-we-do' }, // <- id is lowercase
  { label: 'SEMI-PRIVATE', href: '#semi-private' },
  { label: 'TEAM', href: '#team' },
  // { label: 'VERTIMAX', href: '#vertimax' },
  { label: 'CLINICS', href: '#clinics' },
  // { label: 'GEAR', href: '#gear' },
  // { label: 'CONTACT', href: '#contact' },
  // INSTAGRAM is handled in the copyright line below
];

export default function FooterNav() {
  return (
    <footer
      className="
        mt-auto
        bg-black text-white text-[10px] sm:text-[11px]
        pb-49 sm:pb-0     /* 55px bottom padding ONLY on mobile */
      "
    >
      {/* main nav row */}
      <div className="border-t border-white/15">
        <nav
          className="
            mx-auto max-w-6xl px-4
            py-4 sm:py-6
            flex flex-wrap gap-x-4 gap-y-2
            justify-center
            tracking-[0.22em] uppercase
          "
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                'hover:text-red-600 ' +
                (link.active ? 'text-red-600' : 'text-white')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* instagram + copyright */}
      <div
        className="
          border-t border-white/10
          px-4 py-3
          text-center text-[9px] sm:text-[10px]
          tracking-[0.22em] uppercase
          flex flex-col sm:flex-row
          items-center justify-center
          gap-1 sm:gap-3
        "
      >
        <a
          href="https://www.instagram.com/teampainu/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600"
        >
          INSTAGRAM
        </a>
        <span className="hidden sm:inline">•</span>
        <span>© {new Date().getFullYear()} PAINU.INFO</span>
      </div>
    </footer>
  );
}
