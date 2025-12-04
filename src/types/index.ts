export interface Evidence {
  id: string;
  title: string;
  description: string;
  image?: string;
  type?: 'document' | 'image' | 'video' | 'link';
  url?: string;
}

export interface Experience {
  id: string;
  number: number;
  title: string;
  phase: number;
  overview: string;
  image?: string;
  evidence: Evidence[];
}

export interface Competency {
  name: string;
  level: number; // 1-4 scale
  description: string;
  color: string; // hex color for the petal
}

export interface AcademicSkill {
  name: string;
  level: number; // 1-4 scale
  description: string;
}

export interface LearnerProfile {
  competencies: Competency[];
  academicSkills: AcademicSkill[];
}

export interface Learner {
  id: string;
  name: string;
  phase: number;
  photo: string;
  professionalInterests: string[];
  story?: string;
  storyAudio?: string;
  profile: LearnerProfile;
  experiences: Experience[];
}
