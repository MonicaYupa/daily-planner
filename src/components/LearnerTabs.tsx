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
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {learners.map((learner) => (
        <button
          key={learner.id}
          onClick={() => onSelectLearner(learner.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeLearnerId === learner.id
              ? 'bg-stone-800 text-stone-100'
              : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
          }`}
        >
          {learner.name}
        </button>
      ))}
    </div>
  );
}
