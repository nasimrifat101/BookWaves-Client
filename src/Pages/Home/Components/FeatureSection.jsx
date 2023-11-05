import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "./CardsSection/FeatureCard";

const FeatureSection = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/brands").then((res) => {
      setCards(res.data);
    });
  }, []);
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
