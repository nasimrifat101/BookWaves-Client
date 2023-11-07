import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BooksCard from "./CardRelated/BooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";
import useAxiosNormal from "../../Hooks/useAxiosNormal";

const BooksCategoryWise = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosNormal = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get(`/book/${category}`).then((res) => {
      setBooks(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, [category,axiosNormal]);
  return (
    <div>
      {loading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-5">
            {books.map((book) => (
              <BooksCard key={book._id} book={book}></BooksCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksCategoryWise;
