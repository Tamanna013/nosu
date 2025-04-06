'use client';

import { motion, PanInfo } from 'framer-motion';
import { Profile } from '../types';
import Image from 'next/image';

interface Props {
  profile: Profile;
  onSwipe: (direction: 'left' | 'right') => void;
}

export default function TinderCard({ profile, onSwipe }: Props) {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    const swipeDirection = info.offset.x > swipeThreshold ? 'right' : info.offset.x < -swipeThreshold ? 'left' : null;
    
    if (swipeDirection) {
      onSwipe(swipeDirection);
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
      className="absolute w-[400px] h-[600px] bg-white rounded-2xl shadow-xl cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <Image 
          src={profile.images[0]} 
          alt={profile.name}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
          <h3 className="text-3xl font-bold">{profile.name}, {profile.age}</h3>
          <p className="mt-3 text-lg">{profile.bio}</p>
        </div>
      </div>
    </motion.div>
  );
}