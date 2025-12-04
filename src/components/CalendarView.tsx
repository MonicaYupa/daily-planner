'use client';

import { useState } from 'react';

interface ScheduleItem {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  colspan?: number;
}

interface CalendarSchedule {
  phase: number;
  title: string;
  description: string;
  legend: { emoji: string; label: string; color: string }[];
  schedule: ScheduleItem[];
}

interface CalendarViewProps {
  learnerName: string;
  calendars: CalendarSchedule[];
  onClose: () => void;
}

export default function CalendarView({ learnerName, calendars, onClose }: CalendarViewProps) {
  const [activeCalendarIndex, setActiveCalendarIndex] = useState(0);
  const activeCalendar = calendars[activeCalendarIndex];

  const getCellStyle = (content: string, legend: { emoji: string; color: string }[]) => {
    for (const item of legend) {
      if (content.startsWith(item.emoji)) {
        return { backgroundColor: item.color };
      }
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-sky-100 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-sky-600 hover:text-sky-800 transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Profile
          </button>
          <h1 className="text-lg font-semibold text-sky-800">{learnerName}&apos;s Schedule</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Phase Tabs */}
        {calendars.length > 1 && (
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {calendars.map((cal, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCalendarIndex(idx)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                  activeCalendarIndex === idx
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-sky-700 hover:bg-sky-50 border border-sky-200'
                }`}
              >
                {cal.title}
              </button>
            ))}
          </div>
        )}

        {/* Calendar Card */}
        <div className="wave-card rounded-2xl p-6">
          <h2 className="text-xl font-bold text-sky-800 mb-2">{activeCalendar.title}</h2>
          <p className="text-sky-600 mb-6 max-w-3xl">{activeCalendar.description}</p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-6">
            {activeCalendar.legend.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                style={{ backgroundColor: item.color }}
              >
                <span>{item.emoji}</span>
                <span className="text-gray-700">{item.label}</span>
              </span>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800 w-24">
                    Time
                  </th>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800">
                    Monday
                  </th>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800">
                    Tuesday
                  </th>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800">
                    Wednesday
                  </th>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800">
                    Thursday
                  </th>
                  <th className="border border-sky-200 bg-sky-50 px-3 py-2 text-left text-sm font-semibold text-sky-800">
                    Friday
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeCalendar.schedule.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-sky-200 px-3 py-2 text-sm font-medium text-sky-700 bg-white">
                      {row.time}
                    </td>
                    {row.colspan ? (
                      <td
                        colSpan={5}
                        className="border border-sky-200 px-3 py-2 text-sm text-sky-700 text-center bg-sky-50/50"
                      >
                        {row.monday}
                      </td>
                    ) : (
                      <>
                        <td
                          className="border border-sky-200 px-3 py-2 text-sm text-sky-700"
                          style={getCellStyle(row.monday, activeCalendar.legend)}
                        >
                          {row.monday}
                        </td>
                        <td
                          className="border border-sky-200 px-3 py-2 text-sm text-sky-700"
                          style={getCellStyle(row.tuesday, activeCalendar.legend)}
                        >
                          {row.tuesday}
                        </td>
                        <td
                          className="border border-sky-200 px-3 py-2 text-sm text-sky-700"
                          style={getCellStyle(row.wednesday, activeCalendar.legend)}
                        >
                          {row.wednesday}
                        </td>
                        <td
                          className="border border-sky-200 px-3 py-2 text-sm text-sky-700"
                          style={getCellStyle(row.thursday, activeCalendar.legend)}
                        >
                          {row.thursday}
                        </td>
                        <td
                          className="border border-sky-200 px-3 py-2 text-sm text-sky-700"
                          style={getCellStyle(row.friday, activeCalendar.legend)}
                        >
                          {row.friday}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
