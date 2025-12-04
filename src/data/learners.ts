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

Fast-forward a year: Javi completes his Phase 3 – Experiencing Rite of Passage—a public defense of his portfolio in front of city staff, family members, younger Waves learners, and a panel of engineering faculty. He doesn't just show what he did; he explains how each experience clarified his choice to pursue engineering as a way to serve his community.

He graduates from Waves Prep and is accepted into Cornell's Engineering School.

The relationship doesn't end there. During his first year at Cornell, he still checks in virtually with Mr. Lee and a small group of Waves alumni tackling demanding STEM programs around the country. They trade strategies on time management, impostor syndrome, and office-hours etiquette.

And one afternoon each week, Javi is back on the other side of the equation: logging into a Waves Prep Zoom room as a volunteer mentor for Phase 1 – Discovery students. He listens to ninth-graders talk about their first design challenges and offers small, grounded reflections:

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
            image: '/images/javi/project-proposal.svg',
          },
          {
            id: 'javi-ev-1-2',
            title: 'Community Survey Results',
            description: 'Analysis of 127 survey responses from neighborhood residents',
            image: '/images/javi/survey-results.svg',
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
          'Designed and facilitated a 6-week workshop series teaching data science fundamentals to Phase 1 – Discovery students. Created curriculum covering Python basics, data cleaning, and visualization. 15 students completed the program with 90% reporting increased confidence in coding.',
        evidence: [
          {
            id: 'javi-ev-2-1',
            title: 'Curriculum Guide',
            description: 'Complete lesson plans and learning objectives for all 6 sessions',
            image: '/images/javi/curriculum-guide.svg',
          },
          {
            id: 'javi-ev-2-2',
            title: 'Student Feedback',
            description: 'Anonymous survey results and testimonials from participants',
            image: '/images/javi/student-feedback.svg',
          },
          {
            id: 'javi-ev-2-3',
            title: 'Workshop Materials',
            description: 'Jupyter notebooks and practice exercises created for students',
            image: '/images/javi/workshop-materials.svg',
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
            image: '/images/javi/internship-reflection.svg',
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
            image: '/images/javi/supervisor-evaluation.svg',
          },
        ],
      },
    ],
    calendars: [
      {
        phase: 3,
        title: 'Phase 3 – Experiencing',
        description: 'A typical Phase 3 – Experiencing week while Javi is dual-enrolled in college courses, embedded in the local public works department, and supported by the Waves Prep homebase.',
        legend: [
          { emoji: '🏠', label: 'Waves Homebase', color: '#e0f2fe' },
          { emoji: '🎓', label: 'Dual-Enrollment College', color: '#dbeafe' },
          { emoji: '🏗️', label: 'Public Works Internship', color: '#fee2e2' },
          { emoji: '🧠', label: 'Reflection & Mentoring', color: '#e9d5ff' },
        ],
        schedule: [
          { time: '8:30–9:00', monday: '🏠 Arrival at Waves homebase & check-in', tuesday: '🏠 Arrival & quiet prep time', wednesday: '🏠 Arrival & check-in', thursday: '🏠 Arrival & quiet prep time', friday: '🏠 Community stand-up (dual-enrolled cohort)' },
          { time: '9:00–10:30', monday: '🎓 Live online Calculus II lecture', tuesday: '🎓 Asynchronous college coursework', wednesday: '🎓 College seminar (Intro Engineering)', thursday: '🎓 Asynchronous coursework & office hours', friday: '🎓 Weekly planning block' },
          { time: '10:30–11:00', monday: '🧠 Cohort stand-up: "What clicked? What\'s fuzzy?"', tuesday: '🧠 Short reflection & questions list', wednesday: '🧠 Cohort huddle: connecting work to real-world', thursday: '🧠 Reflection log (competency grid update)', friday: '🧠 Dual-enrollment coach check-in' },
          { time: '11:00–12:30', monday: '🏠 Independent study & assignments', tuesday: '🏠 Project work: build portfolio artifacts', wednesday: '🏠 Study group with dual-enrolled peers', thursday: '🏠 Independent study (math focus)', friday: '🏠 Portfolio maintenance & documentation' },
          { time: '12:30–1:15', monday: 'Lunch & informal peer support', tuesday: '', wednesday: '', thursday: '', friday: '', colspan: 5 },
          { time: '1:15–4:15', monday: '🏗️ Public works – field visits & data collection', tuesday: '🏠 Deep work block: college projects', wednesday: '🏗️ Internship – team meetings & modeling', thursday: '🏗️ Internship – analysis & drafting memos', friday: '🏠 Open flex block (catch-up or rest)' },
          { time: '4:15–5:00', monday: '🧠 Quick daily reflection (evidence added)', tuesday: 'Travel / home', wednesday: 'Travel / home', thursday: 'Travel / home', friday: '🧠 Weekly 1:1 with Waves mentor (Mr. Lee)' },
        ],
      },
      {
        phase: 4,
        title: 'After Waves – Cornell First Year',
        description: 'A representative week as Javi begins at Cornell\'s Engineering School while staying connected to Waves Prep for support and serving as a near-peer mentor.',
        legend: [
          { emoji: '🎓', label: 'Cornell Coursework', color: '#dbeafe' },
          { emoji: '📚', label: 'Study & Project Work', color: '#dcfce7' },
          { emoji: '🧠', label: 'Waves Alumni Support', color: '#e9d5ff' },
          { emoji: '🤝', label: 'Mentoring Phase 1 – Discovery Students', color: '#fef3c7' },
        ],
        schedule: [
          { time: '8:30–10:00', monday: '🎓 Calculus III lecture', tuesday: '🎓 Physics (Mechanics) lecture', wednesday: '🎓 Calculus III recitation', thursday: '🎓 Physics discussion section', friday: '🎓 Intro to Engineering seminar' },
          { time: '10:15–12:00', monday: '📚 Study block (problem sets)', tuesday: '📚 Library work session', wednesday: '📚 Lab prep / notes review', thursday: '📚 Group project meeting', friday: '📚 Open study / office hours' },
          { time: '12:00–1:00', monday: 'Lunch & informal time with peers', tuesday: '', wednesday: '', thursday: '', friday: '', colspan: 5 },
          { time: '1:00–3:00', monday: '🎓 Physics lab', tuesday: '🎓 Computing / programming lab', wednesday: '📚 Project work (design studio)', thursday: '🎓 Engineering seminar / workshop', friday: '📚 Catch-up work or rest' },
          { time: '3:00–4:00', monday: '📚 Individual study or tutoring center', tuesday: '📚 Study group (shared problem sets)', wednesday: '📚 Library deep work block', thursday: '📚 Planning & organizing next week', friday: 'Free / campus activities' },
          { time: '4:00–5:00', monday: '🧠 Waves alumni small-group check-in (virtual)', tuesday: 'Independent time', wednesday: 'Independent time', thursday: 'Independent time', friday: 'Independent time' },
          { time: '7:00–8:00 (Tue)', monday: 'Evening study', tuesday: '🤝 Volunteer mentoring with Waves Phase 1 – Discovery students', wednesday: 'Evening study', thursday: 'Evening study', friday: 'Evening social / clubs' },
        ],
      },
    ],
  },
  {
    id: 'amaya',
    name: 'Amaya',
    phase: 3,
    photo: '/images/amaya/headshot.png',
    professionalInterests: [
      'Culinary Arts',
      'Food Business',
      'Entrepreneurship',
      'Community Service',
    ],
    storyAudio: '/audio/amaya-story.mp3',
    story: `I'm Amaya, a Waves Prep grad in Phase 3 – Experiencing. I'm working and saving to start a food truck.

I came into Waves not thinking I was "school smart." I loved cooking and figured I'd end up working in retail or at a fast-food restaurant eventually. During a food project, I became the person classmates relied on in the kitchen. In reflections, my mentor said, "This is creativity, adaptability, responsibility," and I started to see those as my strengths.

In Phase 2 – Exploration, I worked at a neighborhood bakery. I expected to just bake, but I also learned costs, schedules, and what it takes to keep a business open. It was like seeing the backstage of a show. My competency map showed big strengths in creativity and personal responsibility. That's when I really locked onto food as my path. I decided that in my Phase 3 – Experiencing, I wanted to prepare to run my own food business.

My Phase 3 – Experiencing was built around a local food truck and a business plan for launching my own. I cooked, worked the line and the window, and saw up close how a business survives. I kept asking, "Do I still want this after seeing the hard parts?" The answer stayed yes.

And I'm already in the food world, saving for my truck and mentoring younger Waves learners.

If I'd done a regular high school schedule, I might never have realized food work could be a serious path.

Waves Prep gave us phases, real experiences, and space to decide who we're becoming and what work we want to do in the world.`,
    profile: {
      competencies: [
        {
          name: 'Knowing How to Learn',
          level: 3,
          description: 'Discovered learning through hands-on experiences. Reflects on growth and applies feedback from mentors.',
          color: '#f97316',
        },
        {
          name: 'Personal Qualities',
          level: 4,
          description: 'Demonstrates strong personal responsibility, adaptability, and resilience. Takes ownership of goals.',
          color: '#ec4899',
        },
        {
          name: 'Social Reasoning',
          level: 3,
          description: 'Understands community needs and builds relationships with customers and mentors.',
          color: '#eab308',
        },
        {
          name: 'Quantitative Reasoning',
          level: 3,
          description: 'Applies math to business operations: costs, pricing, inventory, and financial planning.',
          color: '#14b8a6',
        },
        {
          name: 'Communication',
          level: 3,
          description: 'Connects authentically with customers and presents business ideas clearly.',
          color: '#3b82f6',
        },
        {
          name: 'Empirical Reasoning',
          level: 3,
          description: 'Tests recipes, gathers customer feedback, and iterates based on real-world results.',
          color: '#8b5cf6',
        },
      ],
      academicSkills: [
        { name: 'Business Planning', level: 4, description: 'Developed comprehensive food truck business plan with financial projections.' },
        { name: 'Food Safety & Operations', level: 4, description: 'Certified in food handling with hands-on kitchen and service experience.' },
        { name: 'Financial Literacy', level: 3, description: 'Understands costs, margins, scheduling, and what it takes to keep a business running.' },
        { name: 'Customer Service', level: 4, description: 'Builds genuine connections with customers and responds to feedback.' },
      ],
    },
    experiences: [
      {
        id: 'amaya-exp-1',
        number: 1,
        title: 'Waves Prep Kitchen Leadership',
        phase: 1,
        image: '/images/amaya/waves-kitchen.png',
        overview:
          'During a collaborative food project at Waves Prep, I became the person classmates relied on in the kitchen. I discovered that cooking wasn\'t just something I enjoyed—it was where I showed creativity, adaptability, and responsibility. My mentor helped me see these as real strengths, not just hobbies.',
        evidence: [
          {
            id: 'amaya-ev-1-1',
            title: 'Kitchen Leadership',
            description: 'Led food preparation and coordinated with team members during collaborative cooking projects',
            image: '/images/amaya/waves-kitchen.png',
          },
          {
            id: 'amaya-ev-1-2',
            title: 'Mentor Feedback',
            description: 'Reflections documenting growth in creativity, adaptability, and personal responsibility',
            image: '/images/amaya/mentor-feedback.svg',
          },
          {
            id: 'amaya-ev-1-3',
            title: 'Food Sales at Waves',
            description: 'Organized and ran food sales events for the Waves Prep community',
            image: '/images/amaya/selling-food-waves.png',
          },
        ],
      },
      {
        id: 'amaya-exp-2',
        number: 2,
        title: 'Neighborhood Bakery Apprenticeship',
        phase: 2,
        image: '/images/amaya/sba-workshop.png',
        overview:
          'Worked at a neighborhood bakery where I learned far more than baking. I discovered the business side: costs, schedules, inventory, and what it really takes to keep a food business open. It was like seeing the backstage of a show. This experience confirmed food as my path.',
        evidence: [
          {
            id: 'amaya-ev-2-1',
            title: 'Business Operations Learning',
            description: 'Documentation of lessons learned about costs, scheduling, and business sustainability',
            image: '/images/amaya/business-operations.svg',
          },
          {
            id: 'amaya-ev-2-2',
            title: 'SBA Workshop Attendance',
            description: 'Attended Small Business Administration workshop to learn entrepreneurship fundamentals',
            image: '/images/amaya/sba-workshop.png',
          },
          {
            id: 'amaya-ev-2-3',
            title: 'Competency Growth',
            description: 'Competency map showing big strengths in creativity and personal responsibility',
            image: '/images/amaya/competency-growth.svg',
          },
        ],
      },
      {
        id: 'amaya-exp-3',
        number: 3,
        title: 'La Ola Food Truck Internship',
        phase: 3,
        image: '/images/amaya/working-la-ola.png',
        overview:
          'My Phase 3 – Experiencing capstone was built around La Ola Street Kitchen food truck. I cooked, worked the line and the window, and saw up close how a food business survives day-to-day. I kept asking myself, "Do I still want this after seeing the hard parts?" The answer stayed yes.',
        evidence: [
          {
            id: 'amaya-ev-3-1',
            title: 'Line & Window Work',
            description: 'Hands-on experience cooking, preparing orders, and serving customers at the food truck',
            image: '/images/amaya/working-la-ola.png',
          },
          {
            id: 'amaya-ev-3-2',
            title: 'Food Truck Operations',
            description: 'Learning the full operation of La Ola Street Kitchen food truck',
            image: '/images/amaya/food-truck.png',
          },
          {
            id: 'amaya-ev-3-3',
            title: 'Business Plan Presentation',
            description: 'Presented comprehensive business plan for launching my own food truck',
            image: '/images/amaya/business-plan-presentation.png',
          },
        ],
      },
    ],
    calendars: [
      {
        phase: 2,
        title: 'Phase 2 – Exploration',
        description: 'A typical week while Amaya is apprenticing at a neighborhood bakery and developing her first serious food-business project.',
        legend: [
          { emoji: '🏫', label: 'Waves Homebase', color: '#e0f2fe' },
          { emoji: '🥐', label: 'Bakery Placement', color: '#fee2e2' },
          { emoji: '🧠', label: 'Project & Reflection', color: '#dcfce7' },
        ],
        schedule: [
          { time: '8:00–9:00', monday: '🏫 Arrival & advisory check-in', tuesday: '🏫 Arrival & planning block', wednesday: '🏫 Arrival & advisory check-in', thursday: '🏫 Arrival & planning block', friday: '🏫 Whole-cohort meeting' },
          { time: '9:00–10:30', monday: '🏫 Core seminar (literacy, bakery theme)', tuesday: '🏫 Math workshop (costs, percentages)', wednesday: '🏫 Core seminar (science of food systems)', thursday: '🏫 Quant lab (pricing exercises)', friday: '🧠 Reflection circle (what worked/didn\'t)' },
          { time: '10:45–12:00', monday: '🧠 Project studio – inquiry questions', tuesday: '🧠 Project studio – data collection plan', wednesday: '🧠 Project studio – analyze bakery data', thursday: '🧠 Project studio – visuals & story', friday: '🧠 Portfolio updates & evidence' },
          { time: '12:00–1:00', monday: 'Lunch & social time', tuesday: '', wednesday: '', thursday: '', friday: '', colspan: 5 },
          { time: '1:00–4:00', monday: '🥐 Bakery – front-of-house & kitchen basics', tuesday: '🥐 Bakery – back-of-house operations', wednesday: '🥐 Bakery – observe owner\'s meetings', thursday: '🥐 Bakery – experiment with product idea', friday: '🧠 Independent work & 1:1 mentor check-in' },
          { time: '4:00–4:30', monday: '🧠 Quick mentor debrief (key learnings)', tuesday: 'Travel / home', wednesday: '🧠 Journal reflection', thursday: 'Travel / home', friday: 'Plan priorities for next week' },
        ],
      },
      {
        phase: 3,
        title: 'Phase 3 – Experiencing',
        description: 'A typical week as Amaya works with La Ola Street Kitchen, runs a small meal venture at the Waves hub, and builds her food truck business plan with the SBA.',
        legend: [
          { emoji: '🍳', label: 'Waves Hub Kitchen', color: '#fef9c3' },
          { emoji: '🚚', label: 'La Ola Street Kitchen', color: '#fee2e2' },
          { emoji: '🧾', label: 'SBA & Business Plan', color: '#e0f2fe' },
          { emoji: '🧠', label: 'Mentoring & Reflection', color: '#e9d5ff' },
        ],
        schedule: [
          { time: '6:30–8:00', monday: '🍳 Prep breakfast at Waves hub (menu testing)', tuesday: '🍳 Prep breakfast at Waves hub', wednesday: '🍳 Prep breakfast at Waves hub', thursday: '🍳 Prep breakfast at Waves hub', friday: '🍳 Prep & pack meals for Waves families' },
          { time: '8:00–9:00', monday: 'Serve, clean up, log costs & sales', tuesday: 'Serve, clean up, log notes', wednesday: 'Serve, clean up, log notes', thursday: 'Serve, clean up, log notes', friday: 'Serve, clean up, update weekly numbers' },
          { time: '9:30–2:00', monday: '🚚 La Ola – line cook & prep', tuesday: '🚚 La Ola – order window & feedback', wednesday: '🚚 La Ola – line cook & test a special', thursday: '🚚 La Ola – social media & promo', friday: '🚚 La Ola – mixed role as needed' },
          { time: '2:00–3:00', monday: 'Break & travel', tuesday: 'Break & travel', wednesday: 'Break & travel', thursday: 'Break & travel', friday: 'Break & travel' },
          { time: '3:00–4:30', monday: '🧾 SBA workshop (licensing, permits, costs)', tuesday: '🧾 Work session – update business plan', wednesday: '🧾 SBA office hours / advising', thursday: '🧾 Modeling (pricing, margins, savings)', friday: '🧠 Portfolio & reflection with mentor' },
          { time: '4:30–5:00', monday: '🧠 Short reflection log (do I still want this?)', tuesday: 'Independent study / rest', wednesday: 'Independent study / rest', thursday: 'Independent study / rest', friday: 'Next-week planning & goal-setting' },
        ],
      },
    ],
  },
];
