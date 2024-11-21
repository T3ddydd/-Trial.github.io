import React from 'react';
import { FileText } from 'lucide-react';

export function RequestForm() {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">
        Submit Your Request
      </h2>
      <div className="text-center">
        <a
          href="https://forms.gle/5txwE6K3Ys1ZwYwZ8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
        >
          <FileText className="h-5 w-5" />
          Open Request Form
        </a>
        <p className="mt-4 text-slate-400 text-sm">
          Your request will be processed securely through our anonymous form system
        </p>
      </div>
    </div>
  );
}