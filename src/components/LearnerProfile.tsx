'use client';

import { useState } from 'react';
import { Learner, Experience } from '@/types';
import ExperienceCard from './ExperienceCard';
import CompetencyFlower from './CompetencyFlower';
import AcademicSkillsProgress from './AcademicSkillsProgress';

interface LearnerProfileProps {
  learner: Learner;
  onSelectExperience: (experience: Experience) => void;
  onShowCalendar?: () => void;
}

export default function LearnerProfile({ learner, onSelectExperience, onShowCalendar }: LearnerProfileProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const handlePlayStory = () => {
    if (!learner.storyAudio) return;

    // Stop if already playing
    if (isPlaying && audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    const audio = new Audio(learner.storyAudio);

    audio.onended = () => {
      setIsPlaying(false);
    };

    audio.onerror = () => {
      setIsPlaying(false);
    };

    setAudioElement(audio);
    audio.play();
    setIsPlaying(true);
  };

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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-4">
          {/* Day in the Life Audio Button */}
          {learner.storyAudio && (
            <button
              onClick={handlePlayStory}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isPlaying
                  ? 'bg-sky-500 text-white'
                  : 'bg-white/70 text-sky-600 hover:bg-white border border-sky-200'
              }`}
            >
              {isPlaying ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                  <span className="text-sm font-medium">Stop</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span className="text-sm font-medium">Day in the Life</span>
                </>
              )}
            </button>
          )}

          {/* View Calendar Button */}
          {learner.calendars && onShowCalendar && (
            <button
              onClick={onShowCalendar}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all bg-white/70 text-sky-600 hover:bg-white border border-sky-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">View Calendar</span>
            </button>
          )}
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
