import { TiTick } from "react-icons/ti";

const PricingCards = ({
  name,
  title,
  price,
  extraBenefits,
}: {
  name: string;
  title: string;
  price: string;
  extraBenefits: string[];
}) => {
  {
    /*Main Div*/
  }
  return (
    <div className="group flex flex-col items-center justify-center bg-slate-900 border-[6px] w-56 lg:w-64 h-96 p-6 gap-1 border-slate-600 rounded-lg hover:scale-105 duration-500 hover:border-violet-800">
      <p className="uppercase text-center text-md text-white mb-5">{name}</p>
      <h2 className="text-center font-serif text-white text-5xl">{title}</h2>
      <p className="text-sm text-center text-white">{price}/month</p>
      <button className="bg-slate-900 text-white text-sm border border-violet-600 hover:scale-110 hover:bg-violet-800 rounded-md w-24 mt-4 h-8 mb-14 duration-300">
        Purchase
      </button>

      <div className="w-56 lg:w-64 border-t border-slate-600 mb-4 group-hover:border-violet-800"></div>

      <div className="flex flex-col space-y-1 justify-center items-center h-1/5">
        {extraBenefits.map((benefit, index) => (
          <div className="flex">
            <TiTick className="text-white mr-1" />
            <p key={index} className="text-xs text-white">
              {benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
