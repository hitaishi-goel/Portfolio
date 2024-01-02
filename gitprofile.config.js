// import Experience from "./src/components/experience";

const config = {
  github: {
    username: 'hitaishi-goel', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/hitaishi-goel-nitdelhi/',
    twitter: 'foxycurrent',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    leetcode: 'hitaishigoel_nit_delhi',
    phone: '',
    email: 'hitaishigoelofficial@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1WJmMErW3S_x02FuxbQU7Ne3pGNBYtHRV/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++ DSA',
    'C/C++',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Node.js',
    'MySQL',
    'Next.js',
    'Git',
    'GitHub',
    'React',
    'Tailwind',
    'Some Python Libraries like NumPy, Manim, Open CV, Tkinter, etc.',
  ],
  experiences: [
    {
      company: 'VSAT REFURB SOLUTIONS P. LTD.',
      position: 'Web Development Intern',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://www.vsat-refurb.com/#',
    },
    {
      company: 'CodeClause Pvt. Ltd.',
      position: 'Python Development Intern',
      from: 'September 2023',
      to: 'October 2023',
      companyLink: 'https://www.codeclause.com/',
    },
  ],
  certifications: [
    {
      name: 'Code Clause Python Developer Professional Certificate',
      body: '',
      year: 'Sept-2023',
      link: 'https://drive.google.com/file/d/1MvE7ZvxSFyPpNoYegp4sJmDjZJV_agTh/view?usp=drive_link',
    },
    {
      name: 'Meta Front-End Developer Professional Certificate',
      body: '',
      year: 'July-2023',
      link: 'https://drive.google.com/file/d/1zpYizmncSaLOpzTGW_YpNG9f95pRy3n4/view?usp=drive_link',
    },
    {
      name: 'CodeRush Challenge DSA 2023',
      body: 'Rank-30',
      year: '2023',
      link: 'https://drive.google.com/file/d/1EjOkeGPEk3unr3h0Nj8dJTfeUtlGe9Us/view?usp=drive_link',
    },
    {
      name: 'Coding Ninjas Certificate of Achievement Codekaze23',
      body: '',
      year: 'June-2023',
      link: 'https://drive.google.com/file/d/1pUhGTWlEy7Qi_yKxWXScI6_d66aUXsaK/view?usp=drive_link',
    },
    {
      name: 'Software Engineering Virtual Experience Program by Goldman Sachs-Forage',
      body: '',
      year: 'July-2023',
      link: 'https://drive.google.com/file/d/1R2c9GPub85wPDLzwt4cH0C4w2T1fD76L/view?usp=drive_link',
    },
  ],
  education: [
    {
      institution: 'National Institute of Technology, Delhi',
      degree: 'BTech in Electronics and Communication Engineering : 8.24/10',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'National Institute of Technology, Delhi',
      degree: 'Minor Degree in Artificial Intelligence and Machine Learning',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'SKS International Gurukul',
      degree: 'Class 12 : 87.4%',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Aggarsain Public School',
      degree: 'Class 10 : 96.4%',
      from: '2018',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty
  externalProjects: [
    {
      title: 'AlgoTrace Website',
      // shortd: 'Developed and launched the website algotrace.tech',
      description:
        'Developed and launched the website algotrace.tech Demonstrated strong web development skills by creating an interactive and informative platform.Gained valuable experience in website design, development, and maintenance.Acquired hands-on expertise in Bootstrap, HTML, CSS, JavaScript.',
      imageUrl: '/public/logo2.png',
      link: 'http://algotrace.tech/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
