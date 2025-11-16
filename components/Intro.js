// export default function Intro({ data }) {
//   if (!data) return null;
//   const { title, paragraphs = [] } = data;

//   return (
//     <section className="bg-white text-black">
//       <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
//         {title ? (
//           <h2 className="text-center font-semibold tracking-wide uppercase text-xl">
//             {title}
//           </h2>
//         ) : null}

//         <div className="mt-5 space-y-4 text-center leading-relaxed text-[15px] sm:text-base">
//           {paragraphs.map((p, i) => (
//             <p key={i}>{p}</p>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Intro({ data }) {
  if (!data) return null;
  const { title, paragraphs = [] } = data;

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24 text-center">
        {title && (
          <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-[0.2em] uppercase">
            {title}
          </h2>
        )}

        <div className="mt-8 space-y-4 text-[15px] sm:text-[16px] leading-[1.75]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
