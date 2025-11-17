// export default function Gallery({ items = [] }) {
//   if (!items.length) return null;

//   return (
//     <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
//       <div className="flex items-end justify-between mb-6">
//         <h2 className="heading text-xl sm:text-2xl">Gallery</h2>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {items.map((img, i) => (
//           <div key={i} className="frame hover-zoom">
//             <img
//               src={img.src}
//               alt={img.alt || `gallery-${i}`}
//               className="w-full object-fit "
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Gallery({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="heading text-xl sm:text-2xl">Gallery</h2>
      </div>

      {/* Masonry layout */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
        {items.map((img, i) => (
          <figure
            key={i}
            className="
              mb-4 break-inside-avoid
              overflow-hidden rounded-xl
              shadow-sm bg-black/5
              group
            "
          >
            <img
              src={img.src}
              alt={img.alt || `gallery-${i}`}
              loading="lazy"
              className="
                w-full h-auto
                transition-transform duration-300
                object-cover
                group-hover:scale-105
              "
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
