export default function Pricing({ data }) {
  if (!data) return null;
  const { title, subtitle, items, notes } = data;

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="heading text-2xl">{title}</h2>
        {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((card, i) => (
          <div key={i} className="frame border border-white/10 p-5">
            <h3 className="heading text-lg">{card.name}</h3>
            {card.desc && (
              <p className="mt-1 text-sm text-white/70">{card.desc}</p>
            )}

            {card.price || (card.packages && card.packages.length) ? (
              <div className="mt-4">
                {card.price && (
                  <div className="text-2xl font-semibold">
                    {card.price}
                    {card.unit && (
                      <span className="ml-1 text-sm text-white/60">
                        {card.unit}
                      </span>
                    )}
                  </div>
                )}
                {card.packages?.length ? (
                  <ul className="mt-3 space-y-2 text-sm">
                    {card.packages.map((p, j) => (
                      <li
                        key={j}
                        className="flex items-start justify-between gap-4 border-b border-white/10 pb-2"
                      >
                        <span className="text-white/80">{p.label}</span>
                        <span className="font-medium">{p.price}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            {card.note && (
              <p className="mt-3 text-xs text-white/60">{card.note}</p>
            )}
          </div>
        ))}
      </div>

      {notes?.length ? (
        <ul className="mt-6 list-disc pl-5 text-sm text-white/70 space-y-1">
          {notes.map((n, k) => (
            <li key={k}>{n}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
