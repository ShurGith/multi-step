import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";


const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-white"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.296a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 011.06-1.06L9 12.19l7.096-7.096a.75.75 0 011.06 0z"
      clipRule="evenodd"
    />
  </svg>
);

function Step3({ formData, isYearly, updateFormData, errors }) {

  const { initialAddOnsData } = useContext(MainContext);
  const [addOns, setAddOns] = useState(initialAddOnsData);

  const handleToggleAddOn = (id) => {
    setAddOns(prevAddOns => 
      prevAddOns.map((addOn) =>
        addOn.id === id ? { ...addOn, checked: !addOn.checked } : addOn
      )
    );
  };

  useEffect(() => {
    const currentSelectedAddOns = addOns.filter((addOn) => addOn.checked);
    updateFormData({ ...formData, selectedAddOns: currentSelectedAddOns });

    // Para depuración: ver qué se está enviando al padre
    // console.log('useEffect: Actualizando formData con selectedAddOns:', currentSelectedAddOns);

  //? Disable eslint for this useEffect
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOns]); 

  // Si necesitas los add-ons seleccionados para mostrar algo en ESTE componente:
  //const currentlySelectedForDisplay = addOns.filter((addOn) => addOn.checked);
   //console.log('Render: AddOns seleccionados para mostrar:', currentlySelectedForDisplay);


useEffect(() => {
  // Sincronizar el estado interno 'addOns' si hay valores en formData.selectedAddOns
  // Esto es útil si Step3 puede montarse con add-ons ya seleccionados desde el padre.
  if (formData && formData.selectedAddOns && formData.selectedAddOns.length > 0) {
    const parentSelectedIds = new Set(formData.selectedAddOns.map(ao => ao.id)); 
    setAddOns(prevAddOns => 
      prevAddOns.map(localAddOn => ({
        ...localAddOn,
        checked: parentSelectedIds.has(localAddOn.id)
      }))
    );
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



   
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg mx-auto">
      <h2 className="tagH2">Pick add-ons</h2>
      <p 
        className="text-gray-400 text-sm mb-6"
        onClick={() => {
          console.log('Click debug: AddOns actuales:', addOns.filter(ao => ao.checked));
          console.log('Click debug: Prop formData actual:', isYearly);
        }}
      >
        Add-ons help enhance your gaming experience.
      </p>
      <div className="space-y-4 mb-8 sm:mb-10">
        {addOns.map((addOn) => (
          <label
            key={addOn.id}
            htmlFor={addOn.id}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                        ${
                          addOn.checked
                            ? "border-Purple bg-purple-50/50"
                            : "border-gray-300 hover:border-Purple"
                        }`}
          >
            <input
              type="checkbox"
              id={addOn.id}
              checked={addOn.checked}
              onChange={() => handleToggleAddOn(addOn.id)}
              className="sr-only peer"
            />
            <div
              className={`w-5 h-5 border rounded flex items-center justify-center mr-4 flex-shrink-0
                          ${
                            addOn.checked
                              ? "bg-Purple border-Purple" 
                              : "border-Purple/50 group-hover:border-Purple" 
                          }`}
            >
              {addOn.checked && <CheckIcon />}
            </div>
            <div className="flex-grow">
              <h3 className="font-medium text-azul/80">{addOn.title}</h3> 
              <p className="text-sm text-azul/80">{addOn.description}</p>
            </div>
            <span className="text-sm text-Purple font-medium ml-4">
               { isYearly ?  addOn.priceText:addOn.priceTextMonthly}
            </span>
          </label>
        ))}
      </div>
      {errors && errors.selection && ( 
        <p className="text-red-500 text-xs italic mt-1">{errors.selection}</p>
      )}
    </div>
  );
}

export default Step3;