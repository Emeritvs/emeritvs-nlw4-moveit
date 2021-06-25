import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Sidebar } from '../components/Sidebar';
import FaButton from '../components/FaButton';
import { SidebarContext, SidebarProvider } from '../contexts/SidebarContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props : HomeProps) {

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <SidebarProvider>
        <div className={`${styles.container} p-10 lg:py-10 lg:w-5/6 xl:w-3/5`}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
              <div className="col-span-1">
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              
              <div className="col-span-1">
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
          <Sidebar />
        </div>
        <FaButton />
      </SidebarProvider>
    </ChallengesProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {

  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  };

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}

function useContext(SidebarContext: React.Context<SidebarContextData>): {} {
  throw new Error('Function not implemented.');
}

