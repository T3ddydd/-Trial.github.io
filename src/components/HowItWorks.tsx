import React from 'react';

export function HowItWorks() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-100">How It Works</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700/50">
            <span className="font-bold text-purple-400">1</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-slate-200">Submit Request</h3>
            <p className="text-slate-400">Fill out our anonymous request form with your content details</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700/50">
            <span className="font-bold text-purple-400">2</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-slate-200">Receive Instructions</h3>
            <p className="text-slate-400">Get secure payment and delivery details via email</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700/50">
            <span className="font-bold text-purple-400">3</span>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-slate-200">Get Your Content</h3>
            <p className="text-slate-400">Receive your files through our secure delivery system</p>
          </div>
        </div>
      </div>
    </div>
  );
}