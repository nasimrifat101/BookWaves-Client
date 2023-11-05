/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";
import AddBookBanner from "./Banners/AddBookBanner";
import axios from "axios";

const AddBook = () => {
  const [rating, setRating] = useState(0);

  const Addinput = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const content = form.content.value;

    const product = {
      image,
      name,
      author,
      category,
      quantity,
      description,
      content,
      rating: rating,
    };
    console.log(product);

   

    axios.post(`http://localhost:5000/books`, product, {
      headers:{
        'content-type' : 'application/json'
      }
    })
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        toast.success('Book added successfully')
      }
    })
    .catch(error=> {
      console.log(error)
      toast.error('Something Went Wrong')
    })

  };
  return (
    <div>
      <AddBookBanner></AddBookBanner>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
        <div>
          <img
            src="https://i.postimg.cc/15JswPTv/6920933.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div className="hover:shadow-2xl">
          <div className="hero">
            <div className="hero-content">
              <div className="card w-full ">
                <form onSubmit={Addinput} className="card-body ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Image URL"
                      name="image"
                      className="input input-bordered "
                      required
                    />
                  </div>
                  {/* flex */}
                  <div className="lg:flex lg:space-x-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Book Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Author</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Author Name"
                        name="author"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* flex */}
                  <div className="lg:flex lg:space-x-5">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <input
                        type="text"
                        name="category"
                        placeholder="ex: Fiction"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Quantity of the book"
                        name="quantity"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* flex */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Short Description"
                      name="description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* flex */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Content</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Story from the book"
                      name="content"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* flex */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <ReactRating
                      initialRating={rating} // set the initial rating value
                      emptySymbol={
                        <FaStar className="text-gray-300  text-3xl" />
                      } // empty star icon
                      fullSymbol={
                        <FaStar className="text-green-400 text-3xl" />
                      } // filled star icon
                      placeholderRating={0} // set the placeholder rating value
                      onChange={(newRating) => setRating(newRating)} // update rating state
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-accent">Add Book</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddBook;
