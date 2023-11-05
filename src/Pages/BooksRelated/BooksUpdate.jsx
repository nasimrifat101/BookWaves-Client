/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";

const BooksUpdate = () => {
  const [rating, setRating] = useState(0);
  const book = useLoaderData();

  const {_id ,image, name, author, category, quantity } = book;

  const Addinput = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const author = form.author.value;
    const category = form.category.value;
    const quantity = form.quantity.value;

    const product = {
      image,
      name,
      author,
      category,
      quantity,
      rating: rating,
    };
    console.log(product);

    axios.put(`http://localhost:5000/book/${_id}`, product, {
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount){
            toast.success('Book Updated Successfully')
        }
        else{
            toast.warn('Something is Wrong')
        }
    })
    .catch(error=>{
        console.log(error)
    })


  };
  return (
    <div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
        <div>
          <img
            src="https://i.postimg.cc/zG9VNLnt/3630156.jpg"
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
                      defaultValue={image}
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
                        defaultValue={name}
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
                        defaultValue={author}
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
                      <select
                        name="category"
                        defaultValue={category}
                        className="select select-bordered w-[225px]"
                        required
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        <option value="Fiction">Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Drama">Drama</option>
                        <option value="History">History</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={quantity}
                        name="quantity"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* flex */}

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
                    <button className="btn btn-accent">Update Book</button>
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

export default BooksUpdate;
