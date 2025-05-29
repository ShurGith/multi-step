import { createContext, useState, useContext } from "react";

// es-lint-disable-next-line react-refresh/only-export-components
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);

  const initialAddOnsData = [
  {
    id: "onlineService",
    title: "Online service",
    description: "Access to multiplayer games",
    priceText: "+$10/yr",
    price: 10,
    priceTextMonthly: "+$1/mo",
    priceMonthly: 1,
    checked: false,
  },
  {
    id: "largerStorage",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceText: "+$20/yr",
    price: 20,
    priceTextMonthly: "+$2/mo",
    priceMonthly: 2,
    checked: false,
  },
  {
    id: "customizableProfile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    priceText: "+$30/yr",
    price: 30,
    priceTextMonthly: "+$3mo",
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
  image:"icon-arcade.svg",
},
{
  id: "advanced",
  title: "Advanced",
  price: 120,
  priceMonthly: 12,
  image:"icon-advanced.svg",
},
{
  id: "pro",
  title: "Pro",
  price: 150,
  priceMonthly: 15,
  image:"icon-pro.svg",
}

]




  return (
    <MainContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        initialAddOnsData,
        plansData,
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
