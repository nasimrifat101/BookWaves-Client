import { useEffect, useState } from "react";
import FeatureCard from "./CardsSection/FeatureCard";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";

const FeatureSection = () => {
  const [cards, setCards] = useState([]);
  const axiosNormal = useAxiosNormal()
  useEffect(() => {
    axiosNormal.get("/brands").then((res) => {
      setCards(res.data);
    });
  }, [axiosNormal]);
  return (
    <div className="bg-[#eefaf1] rounded-xl">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Books Category</h1>
        <div className="grid grid-cols-6 gap-3 py-10 ">
          {cards.map((card) => (
            <FeatureCard key={card._id} card={card}></FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
