// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import Intro from '@/components/Intro'; // ← add
// import WhatWeDo from '@/components/WhatWeDo'; // ← add
// import Sections from '@/components/Sections';
// import Gallery from '@/components/Gallery';
// import Pricing from '@/components/Pricing';
// import content from '@/lib/content';

// export default function Page() {
//   const { hero, intro, whatWeDo, sections, gallery, pricing } = content;

//   return (
//     <main className="min-h-screen">
//       {/* <div className="bg-red-500 text-white p-6">
//         If this box is red, Tailwind is working.
//       </div> */}
//       <Header />
//       <Hero data={hero} />
//       <Intro data={intro} /> {/* ← written hero intro */}
//       <WhatWeDo data={whatWeDo} /> {/* ← 5-column “WHAT WE DO” */}
//       <Sections data={sections} />
//       <Gallery items={gallery} />
//       <Pricing data={pricing} />
//       <footer id="contact" className="py-12 text-center text-sm text-white/70">
//         © {new Date().getFullYear()} painu.info — All rights reserved.
//       </footer>
//     </main>
//   );
// }

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import WhatWeDo from '@/components/WhatWeDo';
import ImageBand from '@/components/ImageBand';
import Purpose from '@/components/Purpose';
import Sections from '@/components/Sections';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import CoachSection from '@/components/CoachSection';
import FooterNav from '@/components/FooterNav';
import ClipsBanner from '@/components/ClipsBanner';

import content from '@/lib/content';

import TrainingVideoSection from '@/components/TrainingVideoSection';

const { trainingVideos } = content;

export default function Page() {
  const {
    hero,
    intro,
    whatWeDo,
    featureImage1,
    purpose,
    sections,
    gallery,
    pricing,
    coach,
  } = content;

  return (
    <main
      id="top"
      className="min-h-screen
        bg-black text-white
        overflow-x-hidden
        flex flex-col "
    >
      <Header />
      <Hero data={hero} />
      <Intro data={intro} />
      <WhatWeDo data={whatWeDo} />
      {/* <ImageBand data={featureImage1} /> */}

      <ClipsBanner />
      <Sections data={sections} />
      <Purpose data={purpose} />
      <Gallery items={gallery} />
      <Pricing data={pricing} />
      {/* Coach section here */}
      <CoachSection data={coach} />
      <>
        <TrainingVideoSection
          title="1 ON 1 PRIVATE WORKOUTS"
          videos={trainingVideos.private}
        />
        <TrainingVideoSection
          title="TEAM TRAINING"
          videos={trainingVideos.team}
        />

        <TrainingVideoSection
          title="SEMI TRAINING"
          videos={trainingVideos.semi}
        />

        <TrainingVideoSection
          title="BASKETBALL CLINICS"
          videos={trainingVideos.clinics}
        />
      </>
      <FooterNav />
    </main>
  );
}
