import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

export default function ExperienceCard({ experience, onClick }: ExperienceCardProps) {
  return (
    <button
      onClick={onClick}
      className="wave-card rounded-xl overflow-hidden text-left w-full group flex flex-col"
    >
      {/* Experience Image */}
      <div className={`h-32 overflow-hidden ${experience.image ? '' : 'bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center'}`}>
        {experience.image ? (
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover object-top block"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-sky-300"
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
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sky-800 mb-1 group-hover:text-sky-600 transition-colors">
          {experience.title}
        </h3>
        <p className="text-sm text-sky-500 mb-2 line-clamp-2">{experience.overview}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-sky-400">Phase {experience.phase}</span>
          <div className="flex items-center text-xs text-cyan-600 font-medium">
            <span>View</span>
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
        </div>
      </div>
    </button>
  );
}
