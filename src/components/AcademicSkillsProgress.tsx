'use client';

import { useState, useEffect } from 'react';
import { AcademicSkill } from '@/types';

interface AcademicSkillsProgressProps {
  skills: AcademicSkill[];
}

// Color palette for each skill
const skillColors = [
  { from: '#f97316', to: '#fb923c' }, // orange
  { from: '#ec4899', to: '#f472b6' }, // pink
  { from: '#eab308', to: '#facc15' }, // yellow
  { from: '#10b981', to: '#34d399' }, // emerald
  { from: '#3b82f6', to: '#60a5fa' }, // blue
  { from: '#8b5cf6', to: '#a78bfa' }, // violet
];

export default function AcademicSkillsProgress({ skills }: AcademicSkillsProgressProps) {
  const [activeSkill, setActiveSkill] = useState<AcademicSkill | null>(null);
  const [animated, setAnimated] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wave-card rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wide">
        Academic Skills
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Progress bars */}
        <div className="flex-1 space-y-4">
          {skills.map((skill, index) => {
            const colors = skillColors[index % skillColors.length];
            return (
              <div
                key={index}
                className={`cursor-pointer group p-2 -mx-2 rounded-lg transition-colors ${
                  activeSkill === skill ? 'bg-sky-50 ring-1 ring-sky-200' : 'hover:bg-sky-50/50'
                }`}
                onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-sm font-medium transition-colors ${
                    activeSkill === skill ? 'text-sky-900' : 'text-sky-800 group-hover:text-sky-900'
                  }`}>
                    {skill.name}
                  </span>
                  <span className="text-xs font-medium text-sky-800">
                    Level {skill.level}/4
                  </span>
                </div>

                {/* Progress bar with tick marks */}
                <div className="relative h-3 bg-sky-100 rounded-full overflow-hidden">
                  {/* Tick marks */}
                  <div className="absolute inset-0 flex">
                    {[1, 2, 3].map((tick) => (
                      <div
                        key={tick}
                        className="flex-1 border-r border-sky-200/50"
                      />
                    ))}
                    <div className="flex-1" />
                  </div>

                  {/* Progress fill */}
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out relative z-10"
                    style={{
                      width: animated ? `${(skill.level / 4) * 100}%` : '0%',
                      background: `linear-gradient(90deg, ${colors.from} 0%, ${colors.to} 100%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Description area - right side */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="p-3 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl border border-sky-200 h-full min-h-[120px] flex items-center justify-center">
            {activeSkill ? (
              <p className="text-sm text-sky-700">{activeSkill.description}</p>
            ) : (
              <div className="flex flex-col items-center text-center">
                <p className="text-sm text-sky-400">Click on a skill to see details</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-sky-300 mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
