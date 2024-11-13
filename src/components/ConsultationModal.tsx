import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/8aq27dsav14wrxn71q4whww3aw139qoi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          source: window.location.href,
          userAgent: navigator.userAgent
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setStep(3);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl w-full max-w-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 1 ? (
          <motion.form
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Book Your Free Consultation</h2>
            
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-gradient-to-r from-blue-400 to-blue-500 py-3 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-blue-600 transition-all"
            >
              Next Step
            </button>
          </motion.form>
        ) : step === 2 ? (
          <motion.form
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Almost There!</h2>

            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="" className="text-gray-800">Select Experience Level</option>
              <option value="beginner" className="text-gray-800">Beginner Surfer</option>
              <option value="intermediate" className="text-gray-800">Intermediate Surfer</option>
              <option value="advanced" className="text-gray-800">Advanced Surfer</option>
            </select>

            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="" className="text-gray-800">Preferred Consultation Time</option>
              <option value="morning" className="text-gray-800">Morning (9AM - 12PM)</option>
              <option value="afternoon" className="text-gray-800">Afternoon (1PM - 5PM)</option>
              <option value="evening" className="text-gray-800">Evening (6PM - 8PM)</option>
            </select>

            <textarea
              placeholder="Any specific questions or goals?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 outline-none h-32"
            />

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/2 bg-white/10 py-3 rounded-lg text-white font-semibold hover:bg-white/20 transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-gradient-to-r from-blue-400 to-blue-500 py-3 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-blue-600 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Book Consultation'}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-blue-100 mb-8">
              We'll be in touch shortly to confirm your consultation time.
            </p>
            <button
              onClick={onClose}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}