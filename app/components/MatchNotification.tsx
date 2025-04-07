'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  show: boolean;
  onClose: () => void;
  onStartChat: () => void;
}

export default function MatchNotification({ show, onClose, onStartChat }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4">
            <h2 className="text-3xl font-bold mb-4 text-black">It&apos;s a Match! 💖</h2>
            <p className="text-gray-600 mb-6">You and Tamanna have liked each other!</p>
            <div className="space-y-3">
              <button
                onClick={onStartChat}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold"
              >
                Start Chatting
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 bg-gray-100 text-gray-600 rounded-full font-semibold"
              >
                Keep Swiping
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}