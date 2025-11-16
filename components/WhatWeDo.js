// export default function WhatWeDo({ data }) {
//   if (!data) return null;
//   const { title, items = [] } = data;

//   return (
//     <section id="what-we-do" className="bg-black text-white">
//       <div className="pt-12 pb-20 sm:pt-16 sm:pb-24">
//         {/* SECTION TITLE */}
//         {title && (
//           <h2 className="text-center text-[20px] sm:text-[22px] font-semibold tracking-[0.28em] uppercase">
//             {title}
//           </h2>
//         )}

//         {/* FLEX ROW – this mimics:
//             display:flex;
//             column-gap:var(--margin);
//             width:calc(100% - var(--padding)*2);
//             margin:0 auto;
//         */}
//         <div
//           className="
//             mt-10 sm:mt-12
//             mx-auto
//             flex
//             justify-center
//             [width:calc(100%-4rem)]
//             [column-gap:2.5rem]
//           "
//         >
//           {items.map((card, idx) => (
//             <article
//               key={idx}
//               className="
//                 flex-1
//                 max-w-[240px]
//                 bg-[#262626]
//                 rounded-[10px]
//                 px-7 sm:px-8
//                 py-10
//                 flex flex-col
//                 items-center
//                 text-center
//                 text-[12px]
//                 leading-[1.7]
//                 min-h-[460px]
//               "
//             >
//               {/* CARD HEADING */}
//               <h3 className="text-[11px] font-semibold tracking-[0.28em] uppercase">
//                 {card.heading}
//               </h3>

//               {/* BOLD LINES UNDER HEADING */}
//               {card.lines?.length ? (
//                 <div className="mt-4 space-y-0.5 text-[11px] font-semibold uppercase leading-relaxed">
//                   {card.lines.map((line, i) => (
//                     <div key={i}>{line}</div>
//                   ))}
//                 </div>
//               ) : null}

//               {/* ITALIC LINE */}
//               {card.italic && (
//                 <p className="mt-5 text-[11px] italic leading-[1.8]">
//                   {card.italic}
//                 </p>
//               )}

//               {/* BODY TEXT */}
//               {card.body?.length ? (
//                 <div className="mt-5 space-y-3">
//                   {card.body.map((para, i) => (
//                     <p key={i}>{para}</p>
//                   ))}
//                 </div>
//               ) : null}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';

export default function WhatWeDo({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;
  const { title, items = [] } = data;

  return (
    <section id="what-we-do" className="bg-black text-white">
      <div className="pt-12 pb-20 sm:pt-16 sm:pb-24">
        {title && (
          <h2 className="text-center text-[20px] sm:text-[22px] font-semibold tracking-[0.28em] uppercase">
            {title}
          </h2>
        )}

        <div
          className="
            mt-10 sm:mt-12
            mx-auto
            flex
            flex-col sm:flex-row
            items-center sm:items-stretch
            justify-center
            gap-6 sm:gap-10
            w-[calc(100%-4rem)]
          "
        >
          {items.map((card, idx) => {
            const isOpen = openIndex === idx;

            return (
              <article
                key={idx}
                className="
                  w-full sm:flex-1
                  max-w-[260px]
                  bg-[#262626]
                  rounded-[10px]
                  px-7 sm:px-8
                  py-8 sm:py-10
                  flex flex-col
                  items-center
                  text-center
                  text-[12px]
                  leading-[1.7]
                "
              >
                <h3 className="text-[11px] font-semibold tracking-[0.28em] uppercase">
                  {card.heading}
                </h3>

                {card.lines?.length ? (
                  <div className="mt-4 space-y-0.5 text-[11px] font-semibold uppercase leading-relaxed">
                    {card.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                ) : null}

                {/* Mobile toggle */}
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1 text-[11px] font-medium text-white/80 sm:hidden"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {isOpen ? 'See less' : 'See more'}
                  <span
                    className={`inline-block transform transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`
                    mt-5 space-y-3 text-[11px] leading-[1.8]
                    ${isOpen ? 'block' : 'hidden'}
                    sm:block
                  `}
                >
                  {card.italic && <p className="italic">{card.italic}</p>}
                  {card.body?.length
                    ? card.body.map((para, i) => <p key={i}>{para}</p>)
                    : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
