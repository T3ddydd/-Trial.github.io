import React from 'react';
import { BookX, FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-800 shadow-lg border-b border-slate-700">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookX className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold text-slate-100">Shadow Library</span>
        </div>
        <a 
          href="https://forms.gle/5txwE6K3Ys1ZwYwZ8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FileText className="h-6 w-6" />
          <span className="font-medium">Submit Request</span>
        </a>
      </div>
    </header>
  );
}