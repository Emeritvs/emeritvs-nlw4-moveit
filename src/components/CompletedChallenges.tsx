import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext);
  
  return (
    <div className={`${styles.completedChallengesContainer} flex flex-col`}>
      <div className="w-full flex justify-between border-b-2">
        <span>Nível</span>
        <span>5</span>
      </div>

      <div className="w-full flex justify-between">
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
      </div>

    </div>
  );
}