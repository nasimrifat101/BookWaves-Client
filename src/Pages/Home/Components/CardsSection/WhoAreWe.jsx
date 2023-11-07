
import { useEffect, useState } from "react";
import useAxiosNormal from "../../../../Hooks/useAxiosNormal";

const WhoAreWe = () => {
  const [services, setServices] = useState([]);
  const axiosNormal = useAxiosNormal();
  useEffect(() => {
    axiosNormal.get("/services").then((res) => {
      setServices(res.data);
    });
  }, [axiosNormal]);
  return (
    <div className=" my-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-2xl px-3 lg:px-0 lg:text-4xl font-bold py-5">What We Offer </h1>
        <div className="grid p-2 lg:p-0 lg:grid-cols-3 gap-3">
          {services.map((item) => (
            <div key={item.id} className="card border hover:shadow-xl">
              <div className="card-body">
                <div className="flex space-x-3">
                <img src={item.img} alt="" className="w-16 bg-green-200 p-3 rounded-2xl"/>
                <h2 className="card-title">{item.title}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
