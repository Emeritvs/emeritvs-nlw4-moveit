import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface SidebarContextData {
  isActive: boolean;
  changeVisibility: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarProvider({ children } : SidebarProviderProps) {

  const [isActive, setIsActive] = useState(false);

  function changeVisibility() {
    console.log('função executada');
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <SidebarContext.Provider value={{
      isActive,
      changeVisibility
    }}>
      {children}
    </SidebarContext.Provider>
  );
}