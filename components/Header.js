// import Image from 'next/image';

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
//       <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* LOGO */}
//           <div className="w-9 h-9 relative">
//             <Image
//               src="/logo.jpeg"
//               alt="Pain University Logo"
//               fill
//               className="object-cover rounded-full"
//             />
//           </div>

//           <span className="heading tracking-[0.15em] text-sm">PAINU.INFO</span>
//         </div>

//         <nav className="hidden md:flex items-center gap-6 text-sm">
//           <a href="#clips" className="hover:text-brand">
//             Clips
//           </a>
//           <a href="#gallery" className="hover:text-brand">
//             Gallery
//           </a>
//           <a href="#pricing" className="hover:text-brand">
//             Pricing
//           </a>
//           <a href="#contact" className="hover:text-brand">
//             Contact
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#coachsection' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 relative">
              <Image
                src="/logo.jpeg"
                alt="Pain University Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="heading tracking-[0.15em] text-sm">
              PAINU.INFO
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY – pure black, no image */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black text-white md:hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/15">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.jpeg"
                  alt="Pain University Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="tracking-[0.18em] text-xs text-white/70">
                MENU
              </span>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl"
            >
              <FiX />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 px-6 pt-8 pb-10 text-lg">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
