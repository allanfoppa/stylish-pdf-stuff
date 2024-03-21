import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  loading: false,
  setLoading: function ( loading: React.SetStateAction<boolean> ): void {}
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const [ loading, setLoading ] = useState<boolean>(false);

  const contextValue: AppContextType = {
    loading, setLoading
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
