import React from 'react';
import { DollarSign, Clock, BookX } from 'lucide-react';

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 text-center">
        <DollarSign className="h-12 w-12 text-purple-500 mx-auto mb-4" />
        <h3 className="font-semibold text-lg mb-2 text-slate-100">$2 Access Fee</h3>
        <p className="text-slate-400">Fixed price for any content</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 text-center">
        <Clock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
        <h3 className="font-semibold text-lg mb-2 text-slate-100">Swift Delivery</h3>
        <p className="text-slate-400">48-hour maximum wait time</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 text-center">
        <BookX className="h-12 w-12 text-purple-500 mx-auto mb-4" />
        <h3 className="font-semibold text-lg mb-2 text-slate-100">Any Content</h3>
        <p className="text-slate-400">Request whatever you need</p>
      </div>
    </div>
  );
}