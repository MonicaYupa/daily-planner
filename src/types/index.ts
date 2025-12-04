export interface Evidence {
  id: string;
  title: string;
  description: string;
  type?: 'document' | 'image' | 'video' | 'link';
  url?: string;
}

export interface Experience {
  id: string;
  number: number;
  title: string;
  phase: number;
  overview: string;
  evidence: Evidence[];
}

export interface LearnerProfile {
  competencies: string[];
  academicSkills: string[];
}

export interface Learner {
  id: string;
  name: string;
  phase: number;
  photo: string;
  professionalInterests: string[];
  profile: LearnerProfile;
  experiences: Experience[];
}
