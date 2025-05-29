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
        <label className={`flex flex-col size-52 justify-between pl-4 pt-4 border rounded-md cursor-pointerhover:border-Purple
     transition duration-100 ease-in-out ${formData.selection === value ? "border-Purple border-2 cursor-not-allowed" : "border-Purple/40 cursor-pointer"}`}>
            <img
                src={`/images/${image}`}
                alt={`Option ${value}`}
                className="size-12 object-contain"
            />
            <div className="w-full flex flex-col items-start pb-4">

                <input
                    type="radio"
                    className="opacity-0 -z-1 abosulute size-1"
                    name="selection"
                    value={value}
                    checked={formData.selection === value}
                    onChange={handleSelectionChange}
                />
                <h3 className="text-xl font-medium text-azul">{plansData[number].title}</h3>
                <p className="text-base text-azul/60 w-full">
                    {`$${price}${isYearly ? "/yr" : "/mo"}`}
                    {isYearly && <span className="text-xs text-azul"><br />2 months free</span>}
                </p>
            </div>
        </label>
    )
}

export default PlanInput