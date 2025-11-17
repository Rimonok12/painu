import Image from 'next/image';

export default function CoachSection({ data }) {
  if (!data) return null;

  const { imageSrc, imageAlt, title, paragraphs = [] } = data;

  return (
    <section id="coachsection" className="bg-black text-white">
      {/* max width similar to original; full-width on big screens */}
      <div className="mx-auto max-w-[1440px] flex flex-col lg:flex-row">
        {/* LEFT: LARGE COACH IMAGE */}
        <div className="relative w-full lg:w-[62%] h-[260px] sm:h-[380px] lg:h-[720px]">
          <Image
            src={imageSrc}
            alt={imageAlt || 'Coach Clay'}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT: NARROW TEXT COLUMN */}
        <div className="w-full lg:w-[38%] flex flex-col justify-center bg-black px-6 sm:px-10 lg:px-14 py-10 lg:py-0">
          {/* Title */}
          <h2 className="text-center text-[16px] sm:text-[18px] font-semibold tracking-[0.25em] uppercase mb-8">
            {title}
          </h2>

          {/* Paragraphs */}
          <div className="space-y-5 text-[13px] sm:text-[14px] leading-relaxed max-w-[420px] mx-auto">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
