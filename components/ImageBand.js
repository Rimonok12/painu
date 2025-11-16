import Image from 'next/image';

export default function ImageBand({ data }) {
  if (!data) return null;
  const { src, alt } = data;

  return (
    <section className="bg-black">
      <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[520px]">
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
