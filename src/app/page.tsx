'use client';

import { useState } from 'react';
import { learners } from '@/data/learners';
import LearnerTabs from '@/components/LearnerTabs';
import LearnerProfile from '@/components/LearnerProfile';

export default function Home() {
  const [activeLearnerId, setActiveLearnerId] = useState(learners[0].id);
  const activeLearner = learners.find((l) => l.id === activeLearnerId) || learners[0];

  return (
    <div className="min-h-screen bg-stone-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Learner Tabs */}
        <div className="mb-6">
          <LearnerTabs
            learners={learners}
            activeLearnerId={activeLearnerId}
            onSelectLearner={setActiveLearnerId}
          />
        </div>

        {/* Learner Profile */}
        <LearnerProfile learner={activeLearner} />
      </div>
    </div>
  );
}
