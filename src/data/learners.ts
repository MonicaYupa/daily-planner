import { Learner } from '@/types';

export const learners: Learner[] = [
  {
    id: 'javi',
    name: 'Javi',
    phase: 3,
    photo: '/images/javi/headshot.png',
    professionalInterests: [
      'Urban Planning',
      'Community Development',
      'Public Policy',
      'Data Analytics',
    ],
    storyAudio: '/audio/javi-story.mp3',
    story: `Javi swipes into the Waves Prep home base just before 8:30. It's quiet but not empty—half a dozen other dual-enrollment students are already logged into their laptops, earbuds in, coffee cups out. Today is a "college block" morning: three hours dedicated to his online Calculus II course through Metro Community College.

He grabs his usual spot at a high table, opens his notebook, and joins the live session. The environment feels different from a typical high school classroom: the professor is teaching to a mix of 19- and 20-year-olds on campus and dual-enrolled students like Javi who are scattered across the city. But Javi isn't alone; he can glance up and see other Waves Prep students wrestling with the same level of work, ready to commiserate or celebrate after the lecture ends.

When class wraps, the Waves dual-enrollment coach does a quick stand-up with the group:

What did you understand better after today's session?
What's one thing you're still fuzzy on?
How does this connect to the kind of work you want to do?

Javi talks about related rates and how it might show up in modeling traffic flow—something he's actually seen the civil engineers at Public Works talk about. He flags a couple of problems to review with AI tutoring later that afternoon.

By late morning, he's biking across town to his paid internship at the city's public works department. Two days a week he's there, embedded with the civil engineering team. Today he's helping validate data from a recent survey of sidewalk conditions and mapping where upgrades are most urgent.

Javi's mentor, Ms. Alvarez, treats him like a junior team member: she walks him through how the city prioritizes projects, what constraints they're working under, and why the "right" answer is always a negotiation between safety, cost, and politics. She's explicit about the competencies he's practicing: quantitative reasoning, technical communication, and systems thinking.

Around 3:30, he heads back to home base for his weekly session with his Waves Prep mentor, Mr. Lee. They don't talk about homework first. Instead, Mr. Lee asks:

"Where did you feel most 'like an engineer' this week? And where did you feel out of your depth?"

Javi pulls up his portfolio: screenshots of data dashboards, a short memo he drafted for Ms. Alvarez, and notes from his Calc II class. Together they map these artifacts onto his competency grid. Javi notices that while his technical skills are growing steadily, he's still not as confident speaking up in big meetings.

They also check in on the "purpose" side: Is civil engineering still feeling like his lane? So far, the answer is yes. He likes being able to point to a map and say, "This is where the new crosswalk will go," and know that decision might literally save lives.

Fast-forward a year: Javi completes his Phase 3 Rite of Passage—a public defense of his portfolio in front of city staff, family members, younger Waves learners, and a panel of engineering faculty. He doesn't just show what he did; he explains how each experience clarified his choice to pursue engineering as a way to serve his community.

He graduates from Waves Prep and is accepted into Cornell's Engineering School.

The relationship doesn't end there. During his first year at Cornell, he still checks in virtually with Mr. Lee and a small group of Waves alumni tackling demanding STEM programs around the country. They trade strategies on time management, impostor syndrome, and office-hours etiquette.

And one afternoon each week, Javi is back on the other side of the equation: logging into a Waves Prep Zoom room as a volunteer mentor for Phase 1 students. He listens to ninth-graders talk about their first design challenges and offers small, grounded reflections:

"Yeah, I remember when I thought engineering was just being good at math. Let me show you how much of it is actually about talking to people and solving real problems."

Javi is still very much in his own Experiencing phase—testing himself in a demanding college environment—but now he's also part of the ecosystem that helped him get there, giving younger learners an early glimpse of what purposeful work can look like.`,
    profile: {
      competencies: [
        {
          name: 'Knowing How to Learn',
          level: 4,
          description: 'Highly motivated and strategic about learning, independently seeks resources and reflects on growth.',
          color: '#f97316', // orange
        },
        {
          name: 'Personal Qualities',
          level: 3,
          description: 'Demonstrates increased personal, physical and social awareness. Analyzes strengths and prioritizes growth.',
          color: '#ec4899', // pink
        },
        {
          name: 'Social Reasoning',
          level: 3,
          description: 'Investigates social issues from multiple perspectives and proposes evidence-based solutions.',
          color: '#eab308', // yellow
        },
        {
          name: 'Quantitative Reasoning',
          level: 3,
          description: 'Reliably uses mathematics and data analysis to solve complex real-world problems.',
          color: '#14b8a6', // teal
        },
        {
          name: 'Communication',
          level: 4,
          description: 'Communicates with presence and purpose across multiple formats and audiences.',
          color: '#3b82f6', // blue
        },
        {
          name: 'Empirical Reasoning',
          level: 3,
          description: 'Asks deep questions, plans investigations, and draws evidence-based conclusions.',
          color: '#8b5cf6', // purple
        },
      ],
      academicSkills: [
        { name: 'Research & Analysis', level: 4, description: 'Conducts independent research using multiple sources and methodologies.' },
        { name: 'Technical Writing', level: 3, description: 'Produces clear, well-structured documents for professional audiences.' },
        { name: 'Data Visualization', level: 4, description: 'Creates compelling visual representations of complex data.' },
        { name: 'Project Management', level: 3, description: 'Plans and executes multi-week projects with minimal supervision.' },
      ],
    },
    experiences: [
      {
        id: 'javi-exp-1',
        number: 1,
        title: 'Community Garden Project',
        phase: 2,
        image: '/images/javi/reflection.png',
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
            image: '/images/javi/presentation.png',
          },
        ],
      },
      {
        id: 'javi-exp-2',
        number: 2,
        title: 'Data Science Workshop Series',
        phase: 2,
        image: '/images/javi/workshop.png',
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
        image: '/images/javi/internship.png',
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
            title: 'Dashboard & Data Review',
            description: 'Screenshots of interactive Tableau dashboards and data analysis sessions with mentor',
            image: '/images/javi/data-review.png',
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
        {
          name: 'Knowing How to Learn',
          level: 3,
          description: 'Takes ownership of learning process and actively seeks feedback for improvement.',
          color: '#f97316',
        },
        {
          name: 'Personal Qualities',
          level: 3,
          description: 'Shows resilience and adaptability when facing challenges in research.',
          color: '#ec4899',
        },
        {
          name: 'Social Reasoning',
          level: 2,
          description: 'Recognizes different perspectives on environmental and social issues.',
          color: '#eab308',
        },
        {
          name: 'Quantitative Reasoning',
          level: 3,
          description: 'Applies statistical methods to analyze scientific data effectively.',
          color: '#14b8a6',
        },
        {
          name: 'Communication',
          level: 3,
          description: 'Explains complex scientific concepts clearly to diverse audiences.',
          color: '#3b82f6',
        },
        {
          name: 'Empirical Reasoning',
          level: 4,
          description: 'Designs rigorous experiments and draws well-supported conclusions from data.',
          color: '#8b5cf6',
        },
      ],
      academicSkills: [
        { name: 'Lab Techniques', level: 4, description: 'Proficiently conducts experiments following proper protocols and safety procedures.' },
        { name: 'Statistical Analysis', level: 3, description: 'Uses statistical tools to analyze and interpret scientific data.' },
        { name: 'Scientific Writing', level: 3, description: 'Writes clear lab reports and research summaries.' },
        { name: 'Presentation Skills', level: 2, description: 'Presents findings to small groups with visual aids.' },
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
        {
          name: 'Knowing How to Learn',
          level: 2,
          description: 'Beginning to identify personal learning strategies and set goals.',
          color: '#f97316',
        },
        {
          name: 'Personal Qualities',
          level: 2,
          description: 'Developing self-awareness and openness to feedback.',
          color: '#ec4899',
        },
        {
          name: 'Social Reasoning',
          level: 2,
          description: 'Considers how games and media impact different communities.',
          color: '#eab308',
        },
        {
          name: 'Quantitative Reasoning',
          level: 2,
          description: 'Applies basic math concepts in game mechanics and scoring systems.',
          color: '#14b8a6',
        },
        {
          name: 'Communication',
          level: 3,
          description: 'Expresses creative ideas clearly through multiple media formats.',
          color: '#3b82f6',
        },
        {
          name: 'Empirical Reasoning',
          level: 2,
          description: 'Tests game designs through user feedback and iterates based on results.',
          color: '#8b5cf6',
        },
      ],
      academicSkills: [
        { name: 'Programming Fundamentals', level: 2, description: 'Writes basic code using block-based and introductory text languages.' },
        { name: 'Visual Design', level: 3, description: 'Creates appealing graphics and user interfaces.' },
        { name: 'Prototyping', level: 2, description: 'Builds quick mockups to test ideas.' },
        { name: 'User Testing', level: 2, description: 'Gathers and incorporates user feedback into designs.' },
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
