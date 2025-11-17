'use client';

import Image from 'next/image';

export default function ClipsBanner() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black">
      {/* Placeholder image (loads instantly) */}
      <img
        src="/images/one.webp"
        alt="Pain University Training"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text + header on top of the image */}
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-6xl w-full px-4 pb-10">
          <p className="heading text-xs tracking-[0.25em] mb-3">CLIPS</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Featured Clips</h1>
          <p className="mt-3 text-sm text-white/80 max-w-xl">
            Official clips and media — recreated from the original site.
          </p>
        </div>
      </div>
    </section>
  );
}
