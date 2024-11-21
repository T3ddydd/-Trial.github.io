import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { RequestForm } from './components/RequestForm';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-100 mb-4">
              Digital Library Access
            </h1>
            <p className="text-xl text-slate-400">
              Request any digital content. Delivery within 48 hours.
            </p>
          </div>

          <Features />
          <RequestForm />
          <HowItWorks />
        </div>
      </main>

      <Footer />
    </div>
  );
}