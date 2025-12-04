'use client';

import { useState } from 'react';
import { Competency } from '@/types';

interface CompetencyFlowerProps {
  competencies: Competency[];
}

export default function CompetencyFlower({ competencies }: CompetencyFlowerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;
  const minRadius = 30;

  // Calculate petal path based on level (1-4)
  const getPetalPath = (index: number, level: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radians = (angle * Math.PI) / 180;

    // Petal length based on level (1-4 scale)
    const petalLength = minRadius + ((level / 4) * (maxRadius - minRadius));

    // Control points for the petal curve
    const tipX = centerX + Math.cos(radians) * petalLength;
    const tipY = centerY + Math.sin(radians) * petalLength;

    // Side angles for petal width
    const leftAngle = radians - 0.3;
    const rightAngle = radians + 0.3;
    const midRadius = petalLength * 0.6;

    const leftX = centerX + Math.cos(leftAngle) * midRadius;
    const leftY = centerY + Math.sin(leftAngle) * midRadius;
    const rightX = centerX + Math.cos(rightAngle) * midRadius;
    const rightY = centerY + Math.sin(rightAngle) * midRadius;

    // Create a petal shape using quadratic curves
    return `
      M ${centerX} ${centerY}
      Q ${leftX} ${leftY} ${tipX} ${tipY}
      Q ${rightX} ${rightY} ${centerX} ${centerY}
      Z
    `;
  };

  const selectedCompetency = selectedIndex !== null ? competencies[selectedIndex] : null;

  return (
    <div className="wave-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wide">
          Competencies
        </h3>
        {selectedCompetency && (
          <button
            onClick={() => setSelectedIndex(null)}
            className="text-sm text-sky-500 hover:text-sky-700 flex items-center gap-1 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Flower SVG */}
        <div className="relative flex-shrink-0">
          <svg width="300" height="300" viewBox="0 0 300 300" className="mx-auto">
            {/* Background radar circles */}
            {[1, 2, 3, 4].map((level) => (
              <circle
                key={level}
                cx={centerX}
                cy={centerY}
                r={minRadius + ((level / 4) * (maxRadius - minRadius))}
                fill="none"
                stroke="#e0f2fe"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Radar lines */}
            {competencies.map((_, index) => {
              const angle = (index * 360) / competencies.length - 90;
              const radians = (angle * Math.PI) / 180;
              const endX = centerX + Math.cos(radians) * maxRadius;
              const endY = centerY + Math.sin(radians) * maxRadius;
              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={endX}
                  y2={endY}
                  stroke="#e0f2fe"
                  strokeWidth="1"
                />
              );
            })}

            {/* Petals */}
            {competencies.map((comp, index) => (
              <path
                key={index}
                d={getPetalPath(index, comp.level, competencies.length)}
                fill={comp.color}
                fillOpacity={selectedIndex === null || selectedIndex === index ? 0.85 : 0.25}
                stroke={comp.color}
                strokeWidth={selectedIndex === index ? 3 : 2}
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              />
            ))}

            {/* Center circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r="20"
              fill="white"
              stroke="#0ea5e9"
              strokeWidth="2"
            />

            {/* Level labels on radar */}
            {[1, 2, 3, 4].map((level) => (
              <text
                key={level}
                x={centerX + 8}
                y={centerY - (minRadius + ((level / 4) * (maxRadius - minRadius))) + 4}
                fontSize="10"
                fill="#94a3b8"
              >
                L{level}
              </text>
            ))}
          </svg>
        </div>

        {/* Legend / Selected Info */}
        <div className="flex-1 min-w-0 w-full">
          {selectedCompetency ? (
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl p-4 border border-sky-200">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: selectedCompetency.color }}
                />
                <h4 className="font-semibold text-sky-800">{selectedCompetency.name}</h4>
              </div>
              <div className="text-sm text-sky-600 font-medium mb-2">
                Level {selectedCompetency.level}
              </div>
              <p className="text-sm text-sky-700">{selectedCompetency.description}</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-sky-400 mb-3">Click a petal to see details</p>
              {competencies.map((comp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm cursor-pointer hover:bg-sky-50 rounded-lg p-2 transition-colors"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: comp.color }}
                  />
                  <span className="text-sky-800 truncate">{comp.name}</span>
                  <span className="text-sky-500 ml-auto flex-shrink-0">L{comp.level}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
