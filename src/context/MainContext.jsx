import { createContext, useState, useContext } from "react";

// es-lint-disable-next-line react-refresh/only-export-components
export const MainContext = createContext();

const initialAddOnsData = [
  {
    id: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    price: 10,
    priceMonthly: 1,
    checked: false,
  },
  {
    id: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 20,
    priceMonthly: 2,
    checked: false,
  },
  {
    id: "customizableProfile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 30,
    priceMonthly: 3,
    checked: false,
  },
];

const plansData = [
  {
    id: "arcade",
    title: "Arcade",
    price: 90,
    priceMonthly: 9,
    image: "icon-arcade.svg",
  },
  {
    id: "advanced",
    title: "Advanced",
    price: 120,
    priceMonthly: 12,
    image: "icon-advanced.svg",
  },
  {
    id: "pro",
    title: "Pro",
    price: 150,
    priceMonthly: 15,
    image: "icon-pro.svg",
  },
];

export const MainContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [errors, setErrors] = useState({});
  return (
    <MainContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        initialAddOnsData,
        plansData,
        errors,
        setErrors,
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
