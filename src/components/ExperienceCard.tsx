import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export default function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-stone-800 rounded-xl p-4 border border-stone-700 text-left hover:border-stone-500 transition-colors w-full"
    >
      <h3 className="font-medium text-stone-100 mb-1">
        Experience {experience.number}
      </h3>
      <p className="text-sm text-stone-400">Phase {experience.phase}</p>
    </button>
  );
}
