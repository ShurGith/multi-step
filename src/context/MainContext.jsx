import { createContext, useState, useEffect, useContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <MainContext.Provider
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error(
      "useMainContext debe usarse dentro de un MainContextProvider"
    );
  }
  return context;
};
