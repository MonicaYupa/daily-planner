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
        className="absolute inset-0 bg-sky-950/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-white to-sky-50 rounded-3xl border border-sky-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-sky-500/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sky-400 hover:text-sky-600 transition-colors p-2 hover:bg-sky-100 rounded-full"
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

        <div className="p-6 md:p-8">
          {/* Header */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-6 pr-8">
            Experience {experience.number}: {experience.title}
          </h2>

          {/* Overview */}
          <div className="wave-card rounded-2xl p-5 mb-6">
            <h3 className="text-sm font-semibold text-sky-600 mb-3 uppercase tracking-wide">
              Overview
            </h3>
            <p className="text-sky-800 leading-relaxed">{experience.overview}</p>
          </div>

          {/* Evidence */}
          <h3 className="text-sm font-semibold text-sky-600 mb-3 uppercase tracking-wide">
            Evidence
          </h3>
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
