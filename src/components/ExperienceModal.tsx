'use client';

import { Experience } from '@/types';
import EvidenceCard from './EvidenceCard';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-stone-900 rounded-2xl border border-stone-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-amber-200 mb-6">
            Experience {experience.number}: {experience.title}
          </h2>

          {/* Overview */}
          <div className="bg-stone-800 rounded-xl p-5 border border-stone-700 mb-6">
            <h3 className="text-sm font-medium text-stone-400 mb-2">Overview</h3>
            <p className="text-stone-200 leading-relaxed">{experience.overview}</p>
          </div>

          {/* Evidence */}
          <h3 className="text-sm font-medium text-stone-400 mb-3">Evidence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {experience.evidence.map((ev) => (
              <EvidenceCard key={ev.id} evidence={ev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
