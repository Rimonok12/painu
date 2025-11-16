export default function Purpose({ data }) {
  if (!data) return null;
  const { title, body } = data;

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        <div className="flex items-center justify-between text-[18px] text-white/70 mb-6">
          <span className="cursor-default select-none">←</span>
          <span className="cursor-default select-none">→</span>
        </div>

        <h2 className="text-center text-[20px] sm:text-[22px] font-semibold tracking-[0.28em] uppercase text-red-600">
          {title}
        </h2>

        <p className="mt-6 text-center text-[14px] sm:text-[15px] leading-relaxed max-w-3xl mx-auto">
          {body}
        </p>
      </div>
    </section>
  );
}
