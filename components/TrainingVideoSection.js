// import VideoCard from './VideoCard';

// export default function TrainingVideoSection({ title, videos }) {
//   if (!videos) return null;

//   return (
//     <section className="py-12 bg-black text-white">
//       <div className="mx-auto max-w-6xl px-4">
//         <h2 className="text-xl tracking-widest uppercase mb-6">{title}</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {videos.map((v, i) => (
//             <VideoCard key={i} item={v} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import VideoCard from './VideoCard';

export default function TrainingVideoSection({ title, videos }) {
  if (!videos || !videos.length) return null;

  return (
    <section className="py-16 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-[18px] sm:text-[20px] font-semibold tracking-[0.25em] uppercase mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v, idx) => (
            <VideoCard key={idx} item={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
