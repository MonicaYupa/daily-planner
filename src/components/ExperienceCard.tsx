import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export default function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <button
      onClick={onClick}
      className="wave-card rounded-xl p-4 text-left w-full group"
    >
      <h3 className="font-semibold text-sky-800 mb-1 group-hover:text-sky-600 transition-colors">
        Experience {experience.number}
      </h3>
      <p className="text-sm text-sky-500">Phase {experience.phase}</p>
      <div className="mt-2 flex items-center text-xs text-cyan-600 font-medium">
        <span>View details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
