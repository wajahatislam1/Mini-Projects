import PricingCards from "@/app/ui/pricingCards/PricingCards";

const Page = () => {
  const cards = [
    {
      name: "basic",
      title: "100GB",
      price: "$1.99",
      extraBenefits: ["1 User", "2GB File Storage", "24/7 Support"],
    },
    {
      name: "standard",
      title: "200GB",
      price: "$3.99",
      extraBenefits: ["5 Users", "200GB File Storage", "24/7 Support"],
    },
    {
      name: "Premium",
      title: "2TB",
      price: "$8.99",
      extraBenefits: ["20 Users", "2TB File Storage", "24/7 Support"],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 p-4 md:flex-row bg-slate-900">
      {cards.map((card, index) => (
        <PricingCards
          name={card.name}
          title={card.title}
          price={card.price}
          extraBenefits={card.extraBenefits}
          key={index}
        />
      ))}
    </div>
  );
};
export default Page;
