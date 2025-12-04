'use client';

import { useState } from 'react';
import { learners } from '@/data/learners';
import { Experience } from '@/types';
import LearnerTabs from '@/components/LearnerTabs';
import LearnerProfile from '@/components/LearnerProfile';
import ExperienceDetail from '@/components/ExperienceModal';

export default function Home() {
  const [activeLearnerId, setActiveLearnerId] = useState(learners[0].id);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const activeLearner = learners.find((l) => l.id === activeLearnerId) || learners[0];

  // If an experience is selected, show only the experience detail
  if (selectedExperience) {
    return (
      <ExperienceDetail
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-sky-900 mb-2">
            Waves Prep
          </h1>
          <p className="text-sky-600">Learner Portfolios</p>
        </div>

        {/* Learner Tabs */}
        <div className="mb-6">
          <LearnerTabs
            learners={learners}
            activeLearnerId={activeLearnerId}
            onSelectLearner={setActiveLearnerId}
          />
        </div>

        {/* Learner Profile */}
        <LearnerProfile
          learner={activeLearner}
          onSelectExperience={setSelectedExperience}
        />
      </div>
    </div>
  );
}
