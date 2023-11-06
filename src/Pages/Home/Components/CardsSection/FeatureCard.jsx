/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeatureCard = ({ card }) => {
  const { image, category } = card;
  return (
    <div className="hover:shadow-2xl">
      <img src={image} alt=""  className="rounded-t-2xl"/>
      <Link to={`/books/${category}`}>
        <button className="btn btn-accent w-full rounded-t-none rounded-b-xl hover:text-white hover:bg-black border-none ">See Books</button>
      </Link>
    </div>
  );
};

export default FeatureCard;
