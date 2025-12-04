'use client';

import { useState } from 'react';
import { Learner, Experience } from '@/types';
import ExperienceCard from './ExperienceCard';
import ExperienceModal from './ExperienceModal';

interface LearnerProfileProps {
  learner: Learner;
}

export default function LearnerProfile({ learner }: LearnerProfileProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-1">
          Meet {learner.name}
        </h1>
        <p className="text-sky-500 font-medium">Phase {learner.phase} student</p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left column: Photo + Interests */}
        <div className="flex flex-col gap-4">
          {/* Photo placeholder */}
          <div className="wave-card rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-sky-400 text-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto mb-2"
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
              <span className="text-sm font-medium">Photo</span>
            </div>
          </div>

          {/* Professional Interests */}
          <div className="wave-card rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-sky-600 mb-3 uppercase tracking-wide">
              Professional Interests
            </h3>
            <ul className="space-y-2">
              {learner.professionalInterests.map((interest, idx) => (
                <li key={idx} className="text-sky-800 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400"></span>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Learner Profile */}
        <div className="wave-card rounded-2xl p-5 h-fit">
          <h3 className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wide">
            Learner Profile
          </h3>

          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-semibold text-sky-500 uppercase tracking-wide mb-2">
                Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {learner.profile.competencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 text-xs rounded-full font-medium border border-sky-200"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-sky-500 uppercase tracking-wide mb-2">
                Academic Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {learner.profile.academicSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 text-xs rounded-full font-medium border border-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences */}
      <h3 className="text-sm font-semibold text-sky-600 mb-3 uppercase tracking-wide">
        Experiences
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {learner.experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onClick={() => setSelectedExperience(exp)}
          />
        ))}
      </div>

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
}
