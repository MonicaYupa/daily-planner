'use client';

import { Learner, Experience } from '@/types';
import ExperienceCard from './ExperienceCard';
import CompetencyFlower from './CompetencyFlower';
import AcademicSkillsProgress from './AcademicSkillsProgress';

interface LearnerProfileProps {
  learner: Learner;
  onSelectExperience: (experience: Experience) => void;
}

export default function LearnerProfile({ learner, onSelectExperience }: LearnerProfileProps) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      {/* Header with Photo */}
      <div className="mb-6 text-center">
        {/* Circular Photo */}
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
          {learner.photo ? (
            <img
              src={learner.photo}
              alt={learner.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sky-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-1">
          Meet {learner.name}
        </h1>
        <p className="text-sky-500 font-medium mb-4">Phase {learner.phase} student</p>

        {/* Professional Interests */}
        <div className="flex flex-wrap gap-2 justify-center">
          {learner.professionalInterests.map((interest, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 text-sm rounded-full font-medium border border-sky-200"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-sky-600 mb-3 uppercase tracking-wide">
          Experiences
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {learner.experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onClick={() => onSelectExperience(exp)}
            />
          ))}
        </div>
      </div>

      {/* Competencies */}
      <div className="mb-6">
        <CompetencyFlower competencies={learner.profile.competencies} />
      </div>

      {/* Academic Skills */}
      <div className="mb-6">
        <AcademicSkillsProgress skills={learner.profile.academicSkills} />
      </div>
    </div>
  );
}
