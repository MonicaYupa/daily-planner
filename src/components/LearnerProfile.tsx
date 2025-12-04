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
    <div className="bg-stone-900 rounded-2xl border border-stone-700 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-amber-200 mb-1">
          Meet {learner.name}
        </h1>
        <p className="text-stone-400">Phase {learner.phase} student</p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Left column: Photo + Interests */}
        <div className="flex flex-col gap-4">
          {/* Photo placeholder */}
          <div className="bg-stone-800 rounded-xl aspect-square flex items-center justify-center border border-stone-700">
            <div className="text-stone-500 text-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-2"
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
              <span className="text-sm">Photo</span>
            </div>
          </div>

          {/* Professional Interests */}
          <div className="bg-stone-800 rounded-xl p-4 border border-stone-700">
            <h3 className="text-sm font-medium text-stone-400 mb-3">
              Professional Interests
            </h3>
            <ul className="space-y-1">
              {learner.professionalInterests.map((interest, idx) => (
                <li key={idx} className="text-stone-200 text-sm">
                  • {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: Learner Profile */}
        <div className="bg-stone-800 rounded-xl p-4 border border-stone-700 h-fit">
          <h3 className="text-sm font-medium text-stone-400 mb-4">
            Learner Profile
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">
                Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {learner.profile.competencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-stone-700 text-stone-200 text-xs rounded-md"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-2">
                Academic Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {learner.profile.academicSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-stone-700 text-stone-200 text-xs rounded-md"
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
