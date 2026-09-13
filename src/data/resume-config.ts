import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'David-Emmanuel BAH',
    // photo : auto-détectée depuis public/images/ — ne pas renseigner ici
    photoBackEmoji: '🎨',
    title: {
      fr: 'Graphiste | UI/UX Junior',
      en: 'Graphic Designer | Junior UI/UX Designer',
    },
    subtitle: {
      fr: 'Designer digital spécialisé en identité visuelle, UI/UX et webmastering GoHighLevel',
      en: 'Digital designer specialized in visual identity, UI/UX and GoHighLevel web management',
    },
    location: 'Abidjan, Côte d\'Ivoire',
  },

  seo: {
    title: 'David-Emmanuel BAH — Graphiste | UI/UX Junior',
    description: 'CV interactif de David-Emmanuel BAH, designer digital spécialisé en identité visuelle, UI/UX et webmastering GoHighLevel.',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },

  contact: [
    {
      type: 'email',
      label: 'emmmanuelbah@gmail.com',
    },
    {
      type: 'phone',
      label: '0557196889 / 0767707920',
    },
    {
      type: 'location',
      label: 'Abidjan, Côte d\'Ivoire',
    },
  ],

  // ===== SKILLS — DIVISÉES PAR CATÉGORIE =====
  skills: [
    {
      title: {
        fr: 'Langues',
        en: 'Languages',
      },
      type: 'languages',
      items: [
        {
          name: {
            fr: 'Français',
            en: 'French',
          },
          level: {
            fr: 'Courant',
            en: 'Fluent',
          },
        },
        {
          name: {
            fr: 'Anglais',
            en: 'English',
          },
          level: {
            fr: 'Intermédiaire',
            en: 'Intermediate',
          },
        },
      ],
    },

    {
      title: {
        fr: 'Design & UI/UX',
        en: 'Design & UI/UX',
      },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Identité visuelle, logos, chartes graphiques, maquettes web/mobile, parcours utilisateur',
            en: 'Visual identity, logos, brand guidelines, web/mobile mockups, user journeys',
          },
        },
      ],
    },

    {
      title: {
        fr: 'Webmastering & GoHighLevel',
        en: 'Web Management & GoHighLevel',
      },
      type: 'badges',
      items: [
        {
          name: 'GoHighLevel',
        },
        {
          name: {
            fr: 'Landing Pages',
            en: 'Landing Pages',
          },
        },
        {
          name: {
            fr: 'Automatisations',
            en: 'Automations',
          },
        },
        {
          name: 'CRM',
        },
      ],
    },

    {
      title: {
        fr: 'Marketing digital',
        en: 'Digital Marketing',
      },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Community management, email marketing, SEO basique',
            en: 'Community management, email marketing, basic SEO',
          },
        },
      ],
    },

    {
      title: {
        fr: 'Technologies web',
        en: 'Web Technologies',
      },
      type: 'badges',
      items: [
        {
          name: 'HTML/CSS',
          color: '#E34F26',
        },
      ],
    },

    {
      title: {
        fr: 'Qualités',
        en: 'Strengths',
      },
      type: 'text',
      items: [
        {
          name: {
            fr: 'Polyvalent, créatif, orienté résultats',
            en: 'Versatile, creative, results-oriented',
          },
        },
      ],
    },
  ],

  experiences: [
    {
      id: 'elevate',
      company: {
        fr: 'ELEVATE',
        en: 'ELEVATE',
      },
      role: {
        fr: 'Assistant Virtuel',
        en: 'Virtual Assistant',
      },
      type: {
        fr: 'En ligne',
        en: 'Remote',
      },
      period: {
        fr: 'Oct. 2023 – Sept. 2025',
        en: 'Oct. 2023 – Sept. 2025',
      },
      description: {
        fr: 'Création et optimisation de sites web via GoHighLevel, conception de contenus visuels et vidéos, et mise en cohérence de l\'identité digitale des projets Elevate.',
        en: 'Creation and optimization of websites using GoHighLevel, visual and video content creation, and improvement of the digital identity consistency of Elevate projects.',
      },
      techs: [
        'GoHighLevel',
      ],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Assistant Virtuel en ligne contribuant aux projets digitaux d\'Elevate.',
          en: 'Remote Virtual Assistant contributing to Elevate\'s digital projects.',
        },
        tasks: {
          fr: [
            'Création et optimisation de sites web via GoHighLevel',
            'Amélioration de l\'UX et mise en place d\'automatisations',
            'Conception de visuels et vidéos pour les campagnes digitales',
            'Mise en cohérence de l\'identité digitale des projets Elevate',
          ],
          en: [
            'Creation and optimization of websites using GoHighLevel',
            'UX improvement and implementation of automations',
            'Creation of visuals and videos for digital campaigns',
            'Improvement of the digital identity consistency of Elevate projects',
          ],
        },
        env: {
          fr: 'GoHighLevel / UX / Automatisations / Design digital / Vidéo',
          en: 'GoHighLevel / UX / Automations / Digital design / Video',
        },
      },
    },

    {
      id: 'sutol',
      company: {
        fr: 'SUTOL CI',
        en: 'SUTOL CI',
      },
      role: {
        fr: 'Créateur Digital',
        en: 'Digital Creator',
      },
      type: {
        fr: 'Koumassi, Abidjan',
        en: 'Koumassi, Abidjan',
      },
      period: {
        fr: 'Mars – Mai 2024',
        en: 'March – May 2024',
      },
      description: {
        fr: 'Planification et gestion de la stratégie digitale, création de contenus visuels et vidéos, et mise à jour du site web.',
        en: 'Planning and management of the digital strategy, visual and video content creation, and website updates.',
      },
      techs: [
        'HTML/CSS',
      ],
      details: {
        context: {
          fr: 'Création et gestion de contenus pour renforcer la présence digitale de SUTOL CI.',
          en: 'Content creation and management to strengthen SUTOL CI\'s digital presence.',
        },
        tasks: {
          fr: [
            'Planification et gestion de la stratégie digitale',
            'Création de contenus visuels et vidéos',
            'Mise à jour du site web',
            'Optimisation de la visibilité digitale',
          ],
          en: [
            'Planning and management of the digital strategy',
            'Creation of visual and video content',
            'Website updates',
            'Digital visibility optimization',
          ],
        },
        env: {
          fr: 'Design digital / Vidéo / Site web / Marketing digital',
          en: 'Digital design / Video / Website / Digital marketing',
        },
      },
    },

    {
      id: 'ovive',
      company: {
        fr: 'O\'VIVE',
        en: 'O\'VIVE',
      },
      role: {
        fr: 'Infographiste',
        en: 'Graphic Designer',
      },
      type: {
        fr: 'Treichville, Abidjan',
        en: 'Treichville, Abidjan',
      },
      period: {
        fr: 'Août – Oct. 2023',
        en: 'August – Oct. 2023',
      },
      description: {
        fr: 'Création de supports graphiques et production de visuels pour les campagnes marketing.',
        en: 'Creation of graphic materials and visuals for marketing campaigns.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Production de supports graphiques pour les besoins de communication de la marque.',
          en: 'Production of graphic materials for the brand\'s communication needs.',
        },
        tasks: {
          fr: [
            'Création de supports graphiques : affiches, flyers et bannières',
            'Production de visuels pour les campagnes marketing',
            'Contribution à la cohérence visuelle de la marque',
          ],
          en: [
            'Creation of graphic materials: posters, flyers and banners',
            'Production of visuals for marketing campaigns',
            'Contribution to the brand\'s visual consistency',
          ],
        },
        env: {
          fr: 'Infographie / Design graphique / Communication visuelle',
          en: 'Graphic design / Visual design / Visual communication',
        },
      },
    },

    {
      id: 'elelyon',
      company: {
        fr: 'EL-ELYON WORLD',
        en: 'EL-ELYON WORLD',
      },
      role: {
        fr: 'Stagiaire Informaticien / Web & Design',
        en: 'IT Intern / Web & Design',
      },
      type: {
        fr: 'Koumassi, Abidjan',
        en: 'Koumassi, Abidjan',
      },
      period: {
        fr: 'Oct. – Déc. 2022',
        en: 'Oct. – Dec. 2022',
      },
      description: {
        fr: 'Participation au développement du site web, création de supports graphiques et assistance informatique.',
        en: 'Participation in website development, creation of graphic materials and IT support.',
      },
      techs: [
        'HTML/CSS',
      ],
      details: {
        context: {
          fr: 'Stage combinant développement web, design graphique et support informatique.',
          en: 'Internship combining web development, graphic design and IT support.',
        },
        tasks: {
          fr: [
            'Participation au développement du site web',
            'Amélioration des pages et de la navigation',
            'Création de supports graphiques : affiches, bannières et présentations',
            'Installation, maintenance et assistance informatique',
          ],
          en: [
            'Participation in website development',
            'Improvement of pages and navigation',
            'Creation of graphic materials: posters, banners and presentations',
            'IT installation, maintenance and support',
          ],
        },
        training: {
          fr: [
            'Développement front-end',
            'Sens esthétique',
            'Organisation technique',
          ],
          en: [
            'Front-end development',
            'Visual sense',
            'Technical organization',
          ],
        },
        env: {
          fr: 'Web / Design graphique / Support informatique / Front-end',
          en: 'Web / Graphic design / IT support / Front-end',
        },
      },
    },
  ],

  education: [
    {
      school: {
        fr: 'Programme GENIE – Cohorte 0 (GGGI x DigiFemmes)',
        en: 'GENIE Program – Cohort 0 (GGGI x DigiFemmes)',
      },
      degree: {
        fr: 'UX/UI & Développement mobile',
        en: 'UX/UI & Mobile Development',
      },
      specialty: {
        fr: 'Entrepreneuriat vert',
        en: 'Green Entrepreneurship',
      },
      period: 'Août – Octobre 2025',
    },

    {
      school: {
        fr: 'PIGIER Côte d\'Ivoire',
        en: 'PIGIER Côte d\'Ivoire',
      },
      degree: {
        fr: 'BTS Informatique',
        en: 'Higher National Diploma in Computer Science',
      },
      specialty: {
        fr: 'Développement d\'Applications, Réseaux & Génie Logiciel',
        en: 'Application Development, Networks & Software Engineering',
      },
      period: '2020 - 2022',
    },

    {
      school: {
        fr: 'Lycée Moderne 3 Divo',
        en: 'Lycée Moderne 3 Divo',
      },
      degree: {
        fr: 'Baccalauréat Série D',
        en: 'Scientific Baccalaureate, Series D',
      },
      period: '2019 - 2020',
    },
  ],

  projects: [],

  hobbies: [
    {
      title: {
        fr: 'Design créatif',
        en: 'Creative Design',
      },
    },
    {
      title: {
        fr: 'Technologies web',
        en: 'Web Technologies',
      },
    },
    {
      title: {
        fr: 'UI/UX',
        en: 'UI/UX',
      },
    },
    {
      title: {
        fr: 'Vidéo',
        en: 'Video',
      },
    },
  ],

  theme: {
    preset: 'minimal',
  },

  labels: {
    sections: {
      contact: {
        fr: 'CONTACT',
        en: 'CONTACT',
      },
      skills: {
        fr: 'COMPÉTENCES',
        en: 'SKILLS',
      },
      experience: {
        fr: 'EXPÉRIENCES PROFESSIONNELLES',
        en: 'PROFESSIONAL EXPERIENCE',
      },
      education: {
        fr: 'FORMATION',
        en: 'EDUCATION',
      },
      projects: {
        fr: 'PROJETS',
        en: 'PROJECTS',
      },
      hobbies: {
        fr: 'CENTRES D\'INTÉRÊT',
        en: 'INTERESTS',
      },
    },

    experience: {
      mainTasks: {
        fr: 'Missions principales :',
        en: 'Main responsibilities:',
      },
      moreTasks: {
        fr: 'autres missions...',
        en: 'more responsibilities...',
      },
      training: {
        fr: 'Compétences acquises :',
        en: 'Skills acquired:',
      },
      techEnv: {
        fr: 'Env. technique :',
        en: 'Technical environment:',
      },
      technologies: {
        fr: 'Technologies',
        en: 'Technologies',
      },
    },

    actions: {
      clickHint: {
        fr: 'Cliquez sur les expériences pour voir plus de détails',
        en: 'Click on experiences to see more details',
      },
      switchTheme: {
        fr: 'Changer le thème',
        en: 'Change theme',
      },
      downloadPdf: {
        fr: 'Télécharger le PDF',
        en: 'Download PDF',
      },
    },
  },
}
