import { useEffect, useState } from "react";
import AllBooksCard from "./CardRelated/AllBooksCard";
import LoadingPage from "../ErrorPages/LoadingPage";
import useAxiosNormal from "../../Hooks/useAxiosNormal";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./Banners/SearchBar";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  const axiosNormal = useAxiosNormal();

  useEffect(() => {
    axiosNormal.get("/books").then((res) => {
      const randomizedBooks = res.data.sort(() => Math.random() - 0.5);
      setBooks(randomizedBooks);
      setLoading(false);
    });
  }, [axiosNormal]);

  const filterAvailableBooks = () => {
    const availableBooks = books.filter((book) => book.quantity > 0);
    setFilteredBooks(availableBooks);
    console.log(availableBooks);
  };

  useEffect(() => {
    if (search && books.length > 0) {
      const filtered = books.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      // If search term is empty, show all books
      setFilteredBooks(books);
    }
  }, [books, search]);

  const handleDelete = async (id) => {
    try {
      await axiosNormal.delete(`/delete/book/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error(error);
      toast.error(`Book couldn't be deleted`);
    }
  };
  return (
    <div>
      {isLoading ? (
        <LoadingPage></LoadingPage>
      ) : (
        <div className="max-w-6xl mx-auto">
          <SearchBar
            searchTerm={search}
            onSearchChange={setSearch}
            onFilterAvailableBooks={filterAvailableBooks}
          />
          <div className=" grid grid-cols-4 gap-4">
            {filteredBooks.map((book) => (
              <AllBooksCard
                key={book._id}
                book={book}
                onDelete={handleDelete}
              ></AllBooksCard>
            ))}
          </div>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllBooks;
