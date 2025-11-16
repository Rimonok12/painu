import VideoCard from './VideoCard';

export default function Sections({ data }) {
  if (!data?.length) return null;

  return (
    <section id="clips" className="mx-auto max-w-6xl px-4 py-16">
      {data.map((section, idx) => (
        <div key={idx} className="mb-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="heading text-xl sm:text-2xl">{section.title}</h2>
            {section.link && (
              <a href={section.link} className="text-sm hover:text-brand">
                View all
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {section.items.map((item, i) => (
              <VideoCard key={i} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
