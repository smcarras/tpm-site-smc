import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description,
  iconColor = 'text-cyan-500'
}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
      <div className={`${iconColor} mb-4`}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
