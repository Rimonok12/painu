// 'use client';

// import { useState } from 'react';
// import Modal from './Modal';

// export default function VideoCard({ item }) {
//   const [open, setOpen] = useState(false);
//   const isEmbed = Boolean(item?.embedUrl);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="group text-left"
//         title={item.title}
//       >
//         <div className="relative frame hover-zoom">
//           <img
//             src={item.thumb}
//             alt={item.title}
//             className="w-full object-cover aspect-[16/9]"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           <div className="absolute bottom-2 left-2 text-xs bg-black/60 px-2 py-1 rounded-md">
//             Play
//           </div>
//         </div>
//         <div className="mt-2 text-sm muted line-clamp-1">{item.title}</div>
//       </button>

//       <Modal open={open} onClose={() => setOpen(false)}>
//         <div className="aspect-video w-full bg-black">
//           {isEmbed ? (
//             <iframe
//               title={item.title}
//               src={item.embedUrl}
//               className="w-full h-full"
//               allow="autoplay; fullscreen; picture-in-picture"
//               allowFullScreen
//             />
//           ) : (
//             <video
//               src={item.src}
//               poster={item.thumb}
//               controls
//               playsInline
//               preload="metadata"
//               className="w-full h-full"
//             />
//           )}
//         </div>
//         {item.description ? (
//           <div className="p-4 text-sm muted">{item.description}</div>
//         ) : null}
//       </Modal>
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Modal from "./Modal";

// export default function VideoCard({ item }) {
//   const [open, setOpen] = useState(false);
//   const { title, thumb, src, embedUrl, description } = item;

//   const hasThumb = Boolean(thumb);
//   const isEmbed = Boolean(embedUrl);

//   return (
//     <>
//       {/* CARD BUTTON */}
//       <button
//         type="button"
//         onClick={() => setOpen(true)}
//         className="text-left group"
//       >
//         <div className="relative w-full overflow-hidden rounded-2xl bg-white/5 aspect-video">
//           {/* If we have a thumb image, use it. Otherwise, use the video itself */}
//           {hasThumb ? (
//             <Image
//               src={thumb}
//               alt={title}
//               fill
//               className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//             />
//           ) : src ? (
//             <video
//               src={src}
//               muted
//               autoPlay
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//             />
//           ) : null}

//           {/* Dark overlay + Play pill */}
//           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

//           <div className="absolute bottom-3 left-3">
//             <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 text-black text-xs font-medium">
//               Play
//             </span>
//           </div>
//         </div>

//         <p className="mt-2 text-sm font-medium">{title}</p>
//         {description && (
//           <p className="text-xs text-white/60 mt-1">{description}</p>
//         )}
//       </button>

//       {/* MODAL WITH FULL VIDEO / EMBED */}
//       <Modal open={open} onClose={() => setOpen(false)} title={title}>
//         {isEmbed ? (
//           <div className="relative w-full pt-[56.25%]">
//             <iframe
//               src={embedUrl}
//               className="absolute inset-0 w-full h-full"
//               allow="autoplay; fullscreen; picture-in-picture"
//             />
//           </div>
//         ) : src ? (
//           <video
//             src={src}
//             controls
//             autoPlay
//             className="w-full h-auto"
//           />
//         ) : null}
//       </Modal>
//     </>
//   );
// }
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

export default function VideoCard({ item }) {
  const [open, setOpen] = useState(false);

  const { title, thumb, src, embedUrl, description } = item;

  const hasVideo = Boolean(src);
  const hasEmbed = Boolean(embedUrl);
  const hasThumbOnly = Boolean(thumb) && !hasVideo && !hasEmbed;

  return (
    <>
      {/* CARD */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left group"
      >
        <div className="relative w-full overflow-hidden rounded-2xl bg-white/5 aspect-video">
          {/* 🔥 PREVIEW LOGIC:
              1. If we have a video src -> use VIDEO (autoplay muted)
              2. Else if we only have a thumb -> use IMAGE
          */}
          {hasVideo ? (
            <video
              src={src}
              muted
              autoPlay
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : hasThumbOnly ? (
            <Image
              src={thumb}
              alt={title}
              fill
              className="object-fit transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : null}

          {/* Dark overlay + Play pill */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 text-black text-xs font-medium">
              Play
            </span>
          </div>
        </div>

        <p className="mt-2 text-sm font-medium">{title}</p>
        {description && (
          <p className="text-xs text-white/60 mt-1">{description}</p>
        )}
      </button>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)} title={title}>
        {hasEmbed ? (
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        ) : hasVideo ? (
          <video src={src} controls autoPlay className="w-full h-auto" />
        ) : null}
      </Modal>
    </>
  );
}
