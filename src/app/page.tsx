'use client';

import { useState } from 'react';
import Image from 'next/image';
import { learners } from '@/data/learners';
import { Experience } from '@/types';
import LearnerTabs from '@/components/LearnerTabs';
import LearnerProfile from '@/components/LearnerProfile';
import ExperienceDetail from '@/components/ExperienceModal';
import CalendarView from '@/components/CalendarView';

export default function Home() {
  const [activeLearnerId, setActiveLearnerId] = useState(learners[0].id);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const activeLearner = learners.find((l) => l.id === activeLearnerId) || learners[0];

  // If calendar is selected, show the calendar view
  if (showCalendar && activeLearner.calendars) {
    return (
      <CalendarView
        learnerName={activeLearner.name}
        calendars={activeLearner.calendars}
        onClose={() => setShowCalendar(false)}
      />
    );
  }

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-sky-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative h-16 w-36 md:h-20 md:w-44 shrink-0">
              <Image
                src="/images/waves-prep-animated.gif"
                alt="Waves Prep"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
            <LearnerTabs
              learners={learners}
              activeLearnerId={activeLearnerId}
              onSelectLearner={setActiveLearnerId}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <LearnerProfile
            learner={activeLearner}
            onSelectExperience={setSelectedExperience}
            onShowCalendar={() => setShowCalendar(true)}
          />
        </div>
      </main>
    </div>
  );
}
