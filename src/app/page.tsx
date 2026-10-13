import React from 'react';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-[#060913] text-white">
      <div className="max-w-xl p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800 rounded-full">
          Project Initialized
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-slate-400 mb-6 font-medium">
          {siteConfig.tagline}
        </p>
        <div className="text-xs text-slate-500 font-mono border-t border-white/10 pt-4">
          Static Next.js App Router &middot; TypeScript &middot; Tailwind CSS
        </div>
      </div>
    </main>
  );
}
