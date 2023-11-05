import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Routes/AuthProvider";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/borrowing?email=${user?.email}`)
    .then(res=>{
        setBorrowedBooks(res.data)
        console.log(res.data)
    })

  },[user?.email])

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book) => (
          <li key={book._id}>
            {book.product.name} - {book.product.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
