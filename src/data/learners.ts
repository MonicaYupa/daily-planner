import { Learner } from '@/types';

export const learners: Learner[] = [
  {
    id: 'javi',
    name: 'Javi',
    phase: 3,
    photo: '/photos/javi.jpg',
    professionalInterests: [
      'Urban Planning',
      'Community Development',
      'Public Policy',
      'Data Analytics',
    ],
    profile: {
      competencies: [
        'Critical Thinking',
        'Collaboration',
        'Communication',
        'Problem Solving',
        'Leadership',
      ],
      academicSkills: [
        'Research & Analysis',
        'Technical Writing',
        'Data Visualization',
        'Project Management',
      ],
    },
    experiences: [
      {
        id: 'javi-exp-1',
        number: 1,
        title: 'Community Garden Project',
        phase: 2,
        overview:
          'Led a team of 5 students to design and implement a community garden in partnership with the local neighborhood association. Conducted surveys to understand community needs, created a sustainable maintenance plan, and organized volunteer events that engaged over 50 community members.',
        evidence: [
          {
            id: 'javi-ev-1-1',
            title: 'Project Proposal',
            description: 'Initial proposal document outlining goals, timeline, and resource requirements',
          },
          {
            id: 'javi-ev-1-2',
            title: 'Community Survey Results',
            description: 'Analysis of 127 survey responses from neighborhood residents',
          },
          {
            id: 'javi-ev-1-3',
            title: 'Final Presentation',
            description: 'Slide deck presented to community stakeholders and school board',
          },
        ],
      },
      {
        id: 'javi-exp-2',
        number: 2,
        title: 'Data Science Workshop Series',
        phase: 2,
        overview:
          'Designed and facilitated a 6-week workshop series teaching data science fundamentals to Phase 1 students. Created curriculum covering Python basics, data cleaning, and visualization. 15 students completed the program with 90% reporting increased confidence in coding.',
        evidence: [
          {
            id: 'javi-ev-2-1',
            title: 'Curriculum Guide',
            description: 'Complete lesson plans and learning objectives for all 6 sessions',
          },
          {
            id: 'javi-ev-2-2',
            title: 'Student Feedback',
            description: 'Anonymous survey results and testimonials from participants',
          },
          {
            id: 'javi-ev-2-3',
            title: 'Workshop Materials',
            description: 'Jupyter notebooks and practice exercises created for students',
          },
        ],
      },
      {
        id: 'javi-exp-3',
        number: 3,
        title: 'City Bridge Internship',
        phase: 3,
        overview:
          'Completed a 12-week internship with the City Planning Department analyzing transit accessibility data. Built interactive dashboards using Tableau to visualize commute patterns across different neighborhoods. Recommendations were incorporated into the city\'s 2024 transit improvement plan.',
        evidence: [
          {
            id: 'javi-ev-3-1',
            title: 'Internship Reflection',
            description: 'Written reflection on professional growth and key learnings',
          },
          {
            id: 'javi-ev-3-2',
            title: 'Dashboard Screenshots',
            description: 'Screenshots of interactive Tableau dashboards created during internship',
          },
          {
            id: 'javi-ev-3-3',
            title: 'Supervisor Evaluation',
            description: 'Performance review and letter of recommendation from supervisor',
          },
        ],
      },
    ],
  },
  {
    id: 'maya',
    name: 'Maya',
    phase: 2,
    photo: '/photos/maya.jpg',
    professionalInterests: [
      'Environmental Science',
      'Renewable Energy',
      'Science Communication',
      'Field Research',
    ],
    profile: {
      competencies: [
        'Scientific Inquiry',
        'Collaboration',
        'Adaptability',
        'Critical Thinking',
        'Communication',
      ],
      academicSkills: [
        'Lab Techniques',
        'Statistical Analysis',
        'Scientific Writing',
        'Presentation Skills',
      ],
    },
    experiences: [
      {
        id: 'maya-exp-1',
        number: 1,
        title: 'River Water Quality Study',
        phase: 1,
        overview:
          'Conducted a semester-long study of water quality in the local river system. Collected weekly samples from 5 sites, tested for pH, dissolved oxygen, and pollutants. Presented findings to the Environmental Club and created an infographic for community awareness.',
        evidence: [
          {
            id: 'maya-ev-1-1',
            title: 'Data Collection Log',
            description: 'Detailed records of all water samples and testing procedures',
          },
          {
            id: 'maya-ev-1-2',
            title: 'Analysis Report',
            description: 'Statistical analysis of water quality trends over the semester',
          },
          {
            id: 'maya-ev-1-3',
            title: 'Community Infographic',
            description: 'Visual summary created for public awareness campaign',
          },
        ],
      },
      {
        id: 'maya-exp-2',
        number: 2,
        title: 'Solar Panel Efficiency Research',
        phase: 2,
        overview:
          'Partnered with the school facilities team to analyze solar panel performance on campus buildings. Developed a monitoring system to track energy output and identify factors affecting efficiency. Research contributed to a proposal for expanding solar installations.',
        evidence: [
          {
            id: 'maya-ev-2-1',
            title: 'Research Methodology',
            description: 'Documentation of experimental design and data collection approach',
          },
          {
            id: 'maya-ev-2-2',
            title: 'Performance Dashboard',
            description: 'Real-time monitoring interface built to track panel output',
          },
          {
            id: 'maya-ev-2-3',
            title: 'Expansion Proposal',
            description: 'Recommendations for additional solar installations based on findings',
          },
        ],
      },
    ],
  },
  {
    id: 'omar',
    name: 'Omar',
    phase: 1,
    photo: '/photos/omar.jpg',
    professionalInterests: [
      'Game Development',
      'User Experience Design',
      'Digital Art',
      'Storytelling',
    ],
    profile: {
      competencies: [
        'Creativity',
        'Problem Solving',
        'Collaboration',
        'Time Management',
        'Receiving Feedback',
      ],
      academicSkills: [
        'Programming Fundamentals',
        'Visual Design',
        'Prototyping',
        'User Testing',
      ],
    },
    experiences: [
      {
        id: 'omar-exp-1',
        number: 1,
        title: 'Educational Game Prototype',
        phase: 1,
        overview:
          'Designed and developed a prototype for an educational game teaching basic algebra concepts. Used Scratch to create interactive puzzles and conducted user testing with 10 middle school students. Iteratively improved the game based on player feedback and learning outcomes.',
        evidence: [
          {
            id: 'omar-ev-1-1',
            title: 'Game Design Document',
            description: 'Initial concept, mechanics, and learning objectives outline',
          },
          {
            id: 'omar-ev-1-2',
            title: 'User Testing Notes',
            description: 'Observations and feedback from playtesting sessions',
          },
          {
            id: 'omar-ev-1-3',
            title: 'Final Game Link',
            description: 'Playable Scratch project demonstrating completed prototype',
          },
        ],
      },
    ],
  },
];
