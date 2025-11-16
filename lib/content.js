const content = {
  purpose: {
    title: 'PURPOSE',
    body: "Every training session is driven by a clear purpose, whether it's improving shooting accuracy ...",
  },
  trainingVideos: {
    private: [
      {
        title: '1 on 1 Private Workout — Video 1',
        thumb: '/videos/private1.jpg',
        src: '/videos/private1_1.mov',
      },
      {
        title: '1 on 1 Private Workout — Video 2',
        thumb: '/videos/private2.mp4',
        src: '/videos/private2.mp4',
      },
    ],

    team: [
      {
        title: 'Team Training Video 1',
        src: '/videos/team1.mov',
      },
      {
        title: 'Team Training Video 2',
        thumb: '/videos/team2.jpg',
        src: '/videos/team2.mov',
      },
    ],

    semi: [
      {
        title: 'Semi Training — Video 1',
        thumb: '/videos/semi1.jpg',
        src: '/videos/semi1_1.mp4',
      },
      {
        title: 'Semi Training — Video 2',
        thumb: '/videos/semi2.jpg',
        src: '/videos/semi2.mov',
      },
    ],

    clinics: [
      {
        title: 'Basketball Clinics — Video 1',
        thumb: '/videos/clinics1.jpg',
        src: '/videos/clinics1_1.mov',
      },
      {
        title: 'Basketball Clinics — Video 2',
        thumb: '/videos/clinics2.jpg',
        src: '/videos/clinics2.mov',
      },
    ],
  },
  coach: {
    imageSrc: '/images/coach.png', // put your image here
    imageAlt: 'Coach Clay training a player',
    title: 'MEET COACH CLAY',
    paragraphs: [
      'Meet Coach Clay, a dedicated basketball coach and trainer based in Framingham, Massachusetts, with over a decade of experience. Originally from Boston, his love for basketball began early and evolved into a lifelong commitment. With a background in high school and college basketball, Coach Clay transitioned into coaching youth teams in Framingham.',
      'Coach Clay’s training program has produced impressive results, with many of his players earning college scholarships and pursuing professional careers. His success is rooted in a visionary approach to player development that goes beyond conventional basketball skills.',
      'Coach Clay emphasizes not only skill development but also a love for the game and a commitment to excellence. His passion for youth development is the driving force behind his coaching philosophy, creating an environment where players can thrive on and off the court.',
      'Beyond his coaching, Coach Clay is deeply involved in the community, dedicating his time and expertise to local youth programs. His dedication and passion have established him as a role model and an impactful presence in Framingham.',
    ],
  },
  hero: {
    title: 'PAIN U',
    subtitle: 'Official clips and media — recreated from the original site.',
    cta: 'Watch Clips',
    bgImage: '/images/hero-placeholder.png', // add image later
  },

  // NEW — “WELCOME TO PAIN UNIVERSITY”
  intro: {
    title: 'WELCOME TO PAIN UNIVERSITY',
    paragraphs: [
      'Discover the pinnacle of basketball training and development at Pain University, Metrowest Bostons premier destination for high-quality programs and elite training services. Our team, composed of former collegiate athletes and current professionals, is devoted to providing top-tier instruction, ensuring the continuous skill enhancement of every athlete we engage with. ',

      'With over a decade of expertise, Pain University is synonymous with excellence in grassroots basketball. Join us on the journey to redefine performance training, backed by our unwavering commitment to delivering results. ',
    ],
  },

  // NEW — “WHAT WE DO” (5 columns)
  whatWeDo: {
    title: 'WHAT WE DO',
    items: [
      {
        heading: 'PRIVATE TRAINING',
        lines: ['Private 1:1', 'Personalized Workouts', 'Goal-oriented'],
        italic:
          'I need one-on-one attention and a coach that can help me work on improving my weaknesses.',
        body: [
          'Our trainers provide individual attention, focusing on your unique strengths and areas for improvement to maximize your growth as a basketball player.',
          'Sessions guarantee personalized attention and rapid skill development.',
        ],
      },
      {
        heading: 'SEMI TRAINING',
        lines: ['2–4 Players', 'Competitive', 'Skill Application'],
        italic:
          'I want to apply what I have learned in my private training sessions to live play.',
        body: [
          'What good is a finishing move on-air if a player doesn’t know how to use it in a game against defenders?',
          'Small group training allows players to work on their skill development in an intense and forward-thinking atmosphere.',
        ],
      },
      {
        heading: 'TEAM TRAINING',
        lines: [
          'Collaborative Partnership',
          'Team Concepts',
          'Coach Involvement',
        ],
        italic:
          'I want to supplement my practices with professional training that will be customized for my team’s development.',
        body: [
          'Team training sessions offer a unique partnership between your team, your head coach, and Pain.',
          'We work with youth, middle school, high school, AAU/Club teams and college programs.',
        ],
      },
      {
        heading: 'VERTIMAX TRAINING',
        lines: [
          'All Ages / Skill Levels',
          'Vertical Jump',
          'Resistance Training',
        ],
        italic:
          'I want to improve my leg strength so I can jump higher and run faster on the court.',
        body: [
          'Add inches to your vertical leap and increase your speed drastically with our VertiMax resistance band specialty training.',
          'This workout session will help you produce the results you are looking for.',
        ],
      },
      {
        heading: 'BASKETBALL CLINICS',
        lines: ['Fast Pace', 'High-Intensity', 'Targeted Instruction'],
        italic:
          'I want to go to a clinic that has quality coaches and a competitive and fun learning environment.',
        body: [
          'Experience fast-paced, high-intensity sessions crafted to maximize skill development.',
          'Clinics are conducted both individually and in collaboration with towns and leagues.',
        ],
      },
    ],
  },

  // sections: [
  //   {
  //     title: 'Featured Clips',
  //     link: '#',
  //     items: [
  //       // Example: local MP4
  //       {
  //         title: 'Sample Local Clip',
  //         thumb: '/images/hero-placeholder.png',
  //         src: '/videos/vid_1.mov',
  //         description: 'Short description for this clip.',
  //       },
  //       // Example: Vimeo/YT embed
  //       {
  //         title: 'Sample Vimeo Embed',
  //         thumb: '/images/hero-placeholder.png',
  //         embedUrl: 'https://www.instagram.com/p/C551aMjOg4l/', // replace
  //         description: 'Embedded clip.',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Latest',
  //     items: [
  //       {
  //         title: 'Teaser A',
  //         thumb: '/images/thumbs/clip-3.jpg',
  //         src: '/videos/clip-3.mp4',
  //       },
  //       {
  //         title: 'Teaser B',
  //         thumb: '/images/thumbs/clip-4.jpg',
  //         src: '/videos/clip-4.mp4',
  //       },
  //       {
  //         title: 'Teaser C',
  //         thumb: '/images/thumbs/clip-5.jpg',
  //         src: '/videos/clip-5.mp4',
  //       },
  //       {
  //         title: 'Teaser D',
  //         thumb: '/images/thumbs/clip-6.jpg',
  //         src: '/videos/clip-6.mp4',
  //       },
  //     ],
  //   },
  // ],

  gallery: [
    { src: '/images/gallery/1.jpeg', alt: 'gallery 1' },
    { src: '/images/gallery/2.jpeg', alt: 'gallery 2' },
    { src: '/images/gallery/3.jpeg', alt: 'gallery 3' },
    { src: '/images/gallery/4.jpeg', alt: 'gallery 4' },
    { src: '/images/gallery/5.jpeg', alt: 'gallery 5' },
    { src: '/images/gallery/6.jpeg', alt: 'gallery 6' },
    { src: '/images/gallery/7.jpeg', alt: 'gallery 7' },
    { src: '/images/gallery/8.jpeg', alt: 'gallery 8' },
    { src: '/images/gallery/9.jpeg', alt: 'gallery 9' },
    { src: '/images/gallery/10.jpeg', alt: 'gallery 10' },
    { src: '/images/gallery/11.jpeg', alt: 'gallery 11' },
    { src: '/images/gallery/12.jpeg', alt: 'gallery 12' },
    { src: '/images/gallery/13.jpeg', alt: 'gallery 13' },
    { src: '/images/gallery/14.jpeg', alt: 'gallery 14' },
    { src: '/images/gallery/15.jpeg', alt: 'gallery 15' },
  ],
  pricing: {
    title: 'Programs & Pricing',
    subtitle: 'No contracts. Pay as you go or select a package.',
    items: [
      {
        name: 'Basketball Clinics',
        desc: 'Group clinics focused on skill development and game IQ.',
        price: '$275',
        unit: 'per clinic',
      },
      {
        name: '1 on 1 Private Workouts',
        desc: 'Individualized training tailored to your goals.',
        price: '$125',
        unit: 'per hour',
        packages: [
          {
            label: '5-Pack (one-time payment)',
            price: '$450 total ($90/session)',
          },
          {
            label: '10-Pack (one-time payment)',
            price: '$800 total ($80/session)',
          },
        ],
        note: 'This is for 1 on 1 private workouts.',
      },
      {
        name: 'Semi Training (Small Group)',
        desc: 'Small group format for shared reps and competition.',
        price: '$75',
        unit: 'per session',
        note: '“Small group training” corrected to Semi Training as requested.',
      },
      {
        name: 'VertiMax Session',
        desc: 'Explosive power & vertical training using VertiMax.',
        price: '$75',
        unit: 'per session',
        note: 'No VertiMax video available yet.',
      },
      {
        name: 'Team Training',
        desc: 'Custom sessions for full teams (contact for scheduling).',
        // No price provided — leaving as contact/TBD
        note: 'Pricing not provided.',
      },
    ],
  },
};

export default content;
