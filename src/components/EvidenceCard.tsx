import { Evidence } from '@/types';

interface EvidenceCardProps {
  evidence: Evidence;
}

export default function EvidenceCard({ evidence }: EvidenceCardProps) {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-4 border border-sky-200 hover:border-sky-300 transition-colors">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h4 className="font-semibold text-sky-800 mb-1 text-sm">{evidence.title}</h4>
      <p className="text-xs text-sky-600">{evidence.description}</p>
    </div>
  );
}
