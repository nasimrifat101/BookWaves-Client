import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import NotFound from "../Pages/ErrorPages/NotFound";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import AddBook from "../Pages/BooksRelated/AddBook";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "../Pages/BooksRelated/AllBooks";
import BorrowedBooks from "../Pages/BooksRelated/BorrowedBooks";
import BooksCategoryWise from "../Pages/BooksRelated/BooksCategoryWise";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/addbook',
            element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
            path: '/allbooks',
            element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        },
        {
            path: '/books/:category',
            element: <BooksCategoryWise></BooksCategoryWise>
        },
        {
            path: '/borrowedbooks',
            element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        }
      ]
    },
  ]);