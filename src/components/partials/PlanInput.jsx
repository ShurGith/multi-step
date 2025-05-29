import { MainContext } from "../../context/MainContext";
import { useContext } from "react";
function PlanInput({ image, isYearly, updateFormData, formData, number }) {
    const { plansData } = useContext(MainContext);
    const value = plansData[number].id;
    const price = isYearly ? plansData[number].price : plansData[number].priceMonthly;

    const handleSelectionChange = (e) => {
        updateFormData({ ...formData, selection: e.target.value, title: plansData[number].title, price: plansData[number].price, priceMonthly: plansData[number].priceMonthly });
    };

    return (
        <label className={`flex w-full items-start pl-4 py-4  gap-1 border rounded-md cursor-pointer hover:border-Purple
     transition duration-100 ease-in-out ${formData.selection === value ? "border-Purple border-2 cursor-not-allowed" : "border-Purple/40 cursor-pointer"}`}>
            <img
                src={`/images/${image}`}
                alt={`Option ${value}`}
                className="size-12 object-contain"
            />
                <input
                    type="radio"
                    className="opacity-0 -z-1 abosulute size-1"
                    name="selection"
                    value={value}
                    checked={formData.selection === value}
                    onChange={handleSelectionChange}
                />
            <div className="flex flex-col ">
                <h3 className="text-xl text-azul">{plansData[number].title}</h3>
                <h4 className="text-sm text-azul/60 w-full">{`$${price}${isYearly ? "/yr" : "/mo"}`}</h4>
                {isYearly && <h4 className="text-xs text-azul mt-2">2 months free</h4>}
            </div>
        </label>
    )
}

export default PlanInput