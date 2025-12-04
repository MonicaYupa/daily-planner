'use client';

import { Experience } from '@/types';
import EvidenceCard from './EvidenceCard';

interface ExperienceDetailProps {
  experience: Experience;
  onClose: () => void;
}

export default function ExperienceDetail({ experience, onClose }: ExperienceDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-sky-100 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Profile
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Image Placeholder */}
        <div className="h-64 md:h-80 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="mb-8">
          <span className="text-sm font-medium text-sky-500 uppercase tracking-wide">
            Experience {experience.number} • Phase {experience.phase}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-sky-900 mt-2">
            {experience.title}
          </h1>
        </div>

        {/* Overview */}
        <div className="wave-card rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wide">
            Overview
          </h2>
          <p className="text-sky-800 leading-relaxed text-lg">{experience.overview}</p>
        </div>

        {/* Evidence */}
        <h2 className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wide">
          Evidence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experience.evidence.map((ev) => (
            <EvidenceCard key={ev.id} evidence={ev} />
          ))}
        </div>
      </div>
    </div>
  );
}
