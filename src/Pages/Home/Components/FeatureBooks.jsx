import{ useEffect, useState } from "react";
import useAxiosNormal from "../../../Hooks/useAxiosNormal";
import FeaBookCard from "./CardsSection/FeaBookCard";
import { Link } from "react-router-dom";

const FeatureBooks = () => {
  const axiosNormal = useAxiosNormal();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosNormal.get("/books").then((res) => {
      const randomizedBooks = res.data.sort(() => Math.random() - 0.5);
      setBooks(randomizedBooks);
    });
  }, [axiosNormal]);

  
  const slicedBooks = books.slice(0, 11);

  return (
    <div className="max-w-6xl mx-auto my-10">
    <h1 className="text-2xl px-3 lg:px-0 lg:text-4xl font-bold mb-5">Exceptional Reads</h1>
      <div className="grid grid-cols-2 px-2 lg:px-0 lg:grid-cols-7 gap-3">
        {slicedBooks.map((book, index) => (
          <div key={index} className={index === 1 ? "col-span-2 row-span-2 border border-green-200 rounded-xl" : ""}>
            <Link to={`/bookdetails/${book._id}`}>
              <FeaBookCard book={book}></FeaBookCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBooks;
