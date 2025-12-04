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
    <div className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {learners.map((learner) => (
        <button
          key={learner.id}
          onClick={() => onSelectLearner(learner.id)}
          className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all font-medium ${
            activeLearnerId === learner.id
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white'
              : 'bg-white/70 text-sky-700 hover:bg-white border border-sky-200'
          }`}
        >
          {learner.name}
        </button>
      ))}
    </div>
  );
}
