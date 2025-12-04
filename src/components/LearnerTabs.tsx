'use client';

import { Learner } from '@/types';

interface LearnerTabsProps {
  learners: Learner[];
  activeLearnerId: string;
  onSelectLearner: (learnerId: string) => void;
}

export default function LearnerTabs({
  learners,
  activeLearnerId,
  onSelectLearner,
}: LearnerTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {learners.map((learner) => (
        <button
          key={learner.id}
          onClick={() => onSelectLearner(learner.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
            activeLearnerId === learner.id
              ? 'bg-sky-600 text-white'
              : 'bg-white/80 text-sky-700 hover:bg-white border border-sky-200'
          }`}
        >
          {learner.name}
        </button>
      ))}
    </div>
  );
}
