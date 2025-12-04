import { Evidence } from '@/types';

interface EvidenceCardProps {
  evidence: Evidence;
}

export default function EvidenceCard({ evidence }: EvidenceCardProps) {
  return (
    <div className="bg-stone-800 rounded-xl p-4 border border-stone-700">
      <h4 className="font-medium text-stone-100 mb-1">{evidence.title}</h4>
      <p className="text-sm text-stone-400">{evidence.description}</p>
    </div>
  );
}
