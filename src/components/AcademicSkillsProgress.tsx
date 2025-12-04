'use client';

import { useState } from 'react';
import { AcademicSkill } from '@/types';

interface AcademicSkillsProgressProps {
  skills: AcademicSkill[];
}

export default function AcademicSkillsProgress({ skills }: AcademicSkillsProgressProps) {
  const [activeSkill, setActiveSkill] = useState<AcademicSkill | null>(null);

  return (
    <div className="wave-card rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-sky-600 mb-4 uppercase tracking-wide">
        Academic Skills
      </h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-sky-800">{skill.name}</span>
              <span className="text-xs text-sky-500 font-medium">Level {skill.level}/4</span>
            </div>

            {/* Progress bar */}
            <div className="h-3 bg-sky-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(skill.level / 4) * 100}%`,
                  background: `linear-gradient(90deg, #0ea5e9 0%, #06b6d4 100%)`,
                }}
              />
            </div>

            {/* Level markers */}
            <div className="flex justify-between mt-1">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= skill.level ? 'bg-cyan-500' : 'bg-sky-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Description area - fixed height to prevent layout shift */}
      <div className="mt-4 p-3 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl border border-sky-200 min-h-[60px]">
        <p className="text-sm text-sky-700">
          {activeSkill ? activeSkill.description : 'Hover over a skill to see details'}
        </p>
      </div>
    </div>
  );
}
