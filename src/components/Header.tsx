import React, { useState, useEffect } from 'react';
import { Trophy, Clock, AlertCircle, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  validPercentage: number;
}

export default function Header({ activeTab, setActiveTab, validPercentage }: HeaderProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 18, minutes: 40, seconds: 54 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 shadow-lg shadow-emerald-500/5 animate-pulse">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                MuFifa 2026
              </span>
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> AI Powered
              </span>
            </div>
            <h1 className="text-xl font-black tracking-tight text-white sm:text-2xl">
              WC2026 Knockout Predictor
            </h1>
          </div>
        </div>

        {/* Info widgets */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
          {/* Deadline Countdown */}
          <div className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800/80 px-3 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-amber-400" />
            <div>
              <p className="text-slate-500 font-medium">Submission Deadline</p>
              <p className="font-mono text-white font-bold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </p>
            </div>
          </div>

          {/* Validation Status badge */}
          <div className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800/80 px-3 py-2 rounded-xl">
            <div className={`w-2.5 h-2.5 rounded-full ${validPercentage === 100 ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            <div>
              <p className="text-slate-500 font-medium">CSV Validity Checker</p>
              <p className="text-white font-bold">
                {validPercentage}% Verified
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary tabs navigation */}
      <div className="max-w-7xl mx-auto mt-4">
        <div className="flex border-b border-slate-800/60 overflow-x-auto scrollbar-none">
          {[
            { id: 'simulate', label: 'Match Predictor Suite' },
            { id: 'bracket', label: 'Visual Bracket' },
            { id: 'rosters', label: 'Squad Jerseys' },
            { id: 'submit', label: 'Submit & Export' },
            { id: 'leaderboard', label: 'AI Leaderboard' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 font-semibold text-sm transition-all border-b-2 whitespace-nowrap -mb-[2px] ${
                activeTab === tab.id
                  ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
