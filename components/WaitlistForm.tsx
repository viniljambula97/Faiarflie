import React, { useState } from 'react';
import { Button } from './Button';
import { generateLuxuryResponse } from '../services/geminiService';
import { WaitlistStatus } from '../types';

export const WaitlistForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<WaitlistStatus>(WaitlistStatus.IDLE);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus(WaitlistStatus.LOADING);
    
    // Simulate network delay for "weight" of the request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Call Gemini for the experience
    const message = await generateLuxuryResponse(name);
    setResponseMsg(message);
    setStatus(WaitlistStatus.SUCCESS);
  };

  if (status === WaitlistStatus.SUCCESS) {
    return (
      <div className="w-full max-w-xl mx-auto p-12 bg-stone-50 border border-loam-200 text-center animate-fade-in shadow-xl">
        <h3 className="text-loam-800 font-display text-2xl mb-6 uppercase tracking-widest">Request Received</h3>
        <p className="text-loam-600 font-serif text-xl italic leading-loose">
          "{responseMsg}"
        </p>
        <div className="mt-8 text-bronze-600 text-xs uppercase tracking-[0.3em]">
          Ref: {Math.random().toString(36).substring(7).toUpperCase()}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto relative group">
        <div className="relative bg-stone-50 border border-stone-200 p-8 md:p-12 shadow-2xl shadow-loam-900/5">
            <h3 className="text-center font-serif text-loam-800 text-2xl mb-8 italic">Request Access</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-loam-500">Full Name</label>
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-stone-300 focus:border-loam-800 text-loam-900 py-3 outline-none transition-colors duration-500 font-serif text-lg placeholder-stone-400"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-loam-500">Email Address</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-stone-300 focus:border-loam-800 text-loam-900 py-3 outline-none transition-colors duration-500 font-serif text-lg placeholder-stone-400"
                        placeholder="name@example.com"
                        required
                    />
                </div>

                <div className="pt-6">
                    <Button 
                        type="submit" 
                        className="w-full" 
                        variant="primary"
                        disabled={status === WaitlistStatus.LOADING}
                    >
                        {status === WaitlistStatus.LOADING ? 'Transmitting...' : 'Join The Waitlist'}
                    </Button>
                </div>
            </form>
            <p className="mt-6 text-center text-[10px] text-loam-400 uppercase tracking-widest">
                Strictly Limited Availability
            </p>
        </div>
    </div>
  );
};