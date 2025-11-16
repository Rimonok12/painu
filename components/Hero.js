// // export default function Hero({ data }) {
// //   const { title, subtitle, cta, bgImage } = data || {};
// //   return (
// //     <section
// //       className="relative"
// //       style={{
// //         backgroundImage: `url(${bgImage})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black/50" />
// //       <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
// //         <h1 className="heading text-3xl sm:text-5xl font-semibold">{title}</h1>
// //         <p className="mt-4 max-w-2xl text-base sm:text-lg muted">{subtitle}</p>
// //         {cta && (
// //           <div className="mt-8">
// //             <a href="#clips" className="btn">
// //               {cta}
// //             </a>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     // Wait 1 sec before revealing video (same as original site)
//     const timer = setTimeout(() => setShowVideo(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[85vh] overflow-hidden bg-black">
//       {/* Placeholder image (loads instantly) */}
//       <img
//         src="/images/hero-placeholder.png"
//         alt="Pain University Training"
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//           showVideo ? 'opacity-0' : 'opacity-100'
//         }`}
//       />

//       {/* Video (fade-in when loaded after 1sec) */}
//       <video
//         // src="/videos/hero.mp4"
//         src="/videos/vid_1.mov"
//         autoPlay
//         muted
//         loop
//         playsInline
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//           showVideo ? 'opacity-100' : 'opacity-0'
//         }`}
//       />

//       {/* Overlay gradient (same look as archive site) */}
//       <div className="absolute inset-0 bg-black/40"></div>
//     </section>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';

// export default function Hero() {
//   // 15 images: /public/images/gallery/1.jpeg ... 15.jpeg
//   const images = Array.from(
//     { length: 15 },
//     (_, i) => `/images/gallery/${i + 1}.jpeg`
//   );

//   const [index, setIndex] = useState(0); // which image we’re showing

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000); // change every 2 seconds

//     return () => clearInterval(timer);
//   }, [images.length]);

//   // Decide position based on which image it is:
//   // 0 => left, 1 => center, 2 => right, 3 => left again, etc.
//   const pos = index % 3;

//   const positionClass =
//     pos === 0
//       ? 'translate-x-[-40%]' // Left
//       : pos === 1
//       ? 'translate-x-0' // Center
//       : 'translate-x-[40%]'; // Right

//   return (
//     <section className="relative w-full h-[85vh] overflow-hidden bg-black flex items-center justify-center">
//       {/* Single image that moves left/center/right and swaps src each step */}
//       <div
//         className={`
//           absolute
//           w-[70%] md:w-[45%] lg:w-[35%]
//           transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
//           ${positionClass}
//         `}
//       >
//         <img
//           key={images[index]} // force smooth change when src updates
//           src={images[index]}
//           alt="Pain U highlight"
//           className="w-full h-auto rounded-xl shadow-2xl object-cover"
//         />
//       </div>

//       {/* Background / vignette */}
//       <div className="absolute inset-0 bg-black/20" />
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  // 15 gallery images
  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/gallery/${i + 1}.jpeg`
  );

  const [index, setIndex] = useState(0); // which image
  const [ready, setReady] = useState(false); // when to hide placeholder

  // 1) Show placeholder for ~1s
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // 2) Start slideshow only after placeholder is gone
  useEffect(() => {
    if (!ready) return;

    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2000
    );

    return () => clearInterval(timer);
  }, [ready, images.length]);

  // position: 0 => left, 1 => center, 2 => right (desktop only)
  const pos = index % 3;

  // Mobile: always centered (translate-x-0)
  // Desktop: add sm:translate-x-* to shift left/center/right
  const positionClass =
    pos === 0
      ? 'translate-x-0 sm:translate-x-[-40%]' // Left on desktop
      : pos === 1
      ? 'translate-x-0 sm:translate-x-0' // Center
      : 'translate-x-0 sm:translate-x-[40%]'; // Right on desktop

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black flex items-center justify-center">
      {/* 1) Placeholder hero image (full cover) */}
      <img
        src="/images/hero-placeholder.png"
        alt="Pain University Training"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          ready ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* 2) Slider wrapper (fades in after placeholder) */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Single moving image */}
        <div
          className={`
            w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%]
            max-w-sm sm:max-w-md md:max-w-none
            transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${positionClass}
          `}
        >
          <img
            key={images[index]}
            src={images[index]}
            alt="Pain U highlight"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
