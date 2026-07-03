import { useEffect } from 'react';
import { Skill } from '../types';

export function useSkillBarAnimation(skills: Skill[]) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Animation will be handled by Framer Motion
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return skills;
}