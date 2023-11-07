import { useEffect, useState } from "react";
import AllBooksCard from "./CardRelated/AllBooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";
import useAxiosNormal from "../../Hooks/useAxiosNormal";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const axiosNormal = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/books").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, [axiosNormal]);
  return (
    <div>
      {isLoading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
          {books.map((book) => (
            <AllBooksCard key={book._id} book={book}></AllBooksCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
