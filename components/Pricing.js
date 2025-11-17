// export default function Pricing({ data }) {
//   if (!data) return null;
//   const { title, subtitle, items, notes } = data;

//   return (
//     <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
//       <div className="mb-8">
//         <h2 className="heading text-2xl">{title}</h2>
//         {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
//       </div>

//       <div className="grid gap-4 md:grid-cols-2">
//         {items.map((card, i) => (
//           <div key={i} className="frame border border-white/10 p-5">
//             <h3 className="heading text-lg">{card.name}</h3>
//             {card.desc && (
//               <p className="mt-1 text-sm text-white/70">{card.desc}</p>
//             )}

//             {card.price || (card.packages && card.packages.length) ? (
//               <div className="mt-4">
//                 {card.price && (
//                   <div className="text-2xl font-semibold">
//                     {card.price}
//                     {card.unit && (
//                       <span className="ml-1 text-sm text-white/60">
//                         {card.unit}
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 {card.packages?.length ? (
//                   <ul className="mt-3 space-y-2 text-sm">
//                     {card.packages.map((p, j) => (
//                       <li
//                         key={j}
//                         className="flex items-start justify-between gap-4 border-b border-white/10 pb-2"
//                       >
//                         <span className="text-white/80">{p.label}</span>
//                         <span className="font-medium">{p.price}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : null}
//               </div>
//             ) : null}

//             {card.note && (
//               <p className="mt-3 text-xs text-white/60">{card.note}</p>
//             )}
//           </div>
//         ))}
//       </div>

//       {notes?.length ? (
//         <ul className="mt-6 list-disc pl-5 text-sm text-white/70 space-y-1">
//           {notes.map((n, k) => (
//             <li key={k}>{n}</li>
//           ))}
//         </ul>
//       ) : null}
//     </section>
//   );
// }

'use client';

import { useState } from 'react';

export default function Pricing({ data }) {
  // ✅ Hooks MUST be at the very top, before any early returns
  const [openQRIndex, setOpenQRIndex] = useState(null);

  if (!data) return null;

  const { title, subtitle, items, notes } = data;

  const toggleQR = (index) => {
    setOpenQRIndex(openQRIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="heading text-2xl">{title}</h2>
        {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((card, i) => {
          const hasPricing =
            card.price || (card.packages && card.packages.length);
          const isOpen = openQRIndex === i;

          return (
            <div
              key={i}
              className="frame border border-white/10 bg-[#050505] rounded-2xl p-5 flex flex-col"
            >
              <h3 className="heading text-lg">{card.name}</h3>

              {card.desc && (
                <p className="mt-1 text-sm text-white/70">{card.desc}</p>
              )}

              {hasPricing && (
                <div className="mt-4">
                  {card.price && (
                    <div className="text-2xl font-semibold">
                      {card.price}
                      {card.unit && (
                        <span className="ml-1 text-sm text-white/60">
                          {card.unit}
                        </span>
                      )}
                    </div>
                  )}

                  {card.packages?.length > 0 && (
                    <ul className="mt-3 space-y-2 text-sm">
                      {card.packages.map((p, j) => (
                        <li
                          key={j}
                          className="flex items-start justify-between gap-4 border-b border-white/10 pb-2"
                        >
                          <span className="text-white/80">{p.label}</span>
                          <span className="font-medium">{p.price}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* 🔴 Pay Now button */}
              {hasPricing && (
                <button
                  onClick={() => toggleQR(i)}
                  className="
                    mt-5 w-[100px] py-3 
                    rounded-full 
                    bg-gradient-to-r from-red-500 via-red-600 to-red-700
                    text-sm font-semibold tracking-wide
                    shadow-[0_10px_25px_rgba(248,113,113,0.35)]
                    transition-all duration-200
                    hover:shadow-[0_14px_32px_rgba(248,113,113,0.55)]
                    hover:-translate-y-0.5
                    active:translate-y-0
                  "
                >
                  {isOpen ? 'Hide QR' : 'Pay Now'}
                </button>
              )}

              {/* 🔳 QR block */}
              {/* <div
                className={`
                  overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-out
                  ${
                    isOpen
                      ? 'max-h-[520px] opacity-100 mt-4'
                      : 'max-h-0 opacity-0 mt-0'
                  }
                `}
              >
                <div className="bg-white rounded-2xl p-4 flex justify-center">
                  <img
                    src="/images/qr.jpeg"
                    alt="Payment QR code"
                    className="max-h-[420px] w-auto object-contain"
                  />
                </div>
              </div> */}
              <div
                className={`
    overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-out
    ${isOpen ? 'max-h-[650px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
  `}
              >
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center">
                  <img
                    src="/images/qr.jpeg"
                    alt="Payment QR code"
                    className="max-h-[420px] w-auto object-contain"
                  />

                  {/* Contact line */}
                  <p className="text-black text-sm mt-4 text-center opacity-80">
                    For more information contact{' '}
                    <span className="font-semibold text-red-700">
                      painuniversity83@gmail.com
                    </span>
                  </p>
                </div>
              </div>
              {card.note && (
                <p className="mt-3 text-xs text-white/60">{card.note}</p>
              )}
            </div>
          );
        })}
      </div>

      {notes?.length > 0 && (
        <ul className="mt-6 list-disc pl-5 text-sm text-white/70 space-y-1">
          {notes.map((n, k) => (
            <li key={k}>{n}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
