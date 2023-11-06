/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/book/detail/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
  }, [id]);

  const { name, image, quantity, author, rating, category, description } =
    details;

  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const name = user.displayName;
    const email = user.email;
    const product = details;

    const borrow = { date, name, email, product };

    axios
      .post(`http://localhost:5000/borrow`, borrow, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          const updatedQuantity = details.quantity - 1;

          if (updatedQuantity >= 0) {
            axios
              .put(`http://localhost:5000/book/update/${details._id}`, {
                quantity: updatedQuantity,
              })
              .then((response) => {
                setDetails((prevDetails) => ({
                  ...prevDetails,
                  quantity: updatedQuantity,
                }));
                console.log(response.data);
                toast.success("Book Borrowed Successfully");
              })
              .catch((error) => {
                console.error(error);
                toast.error("Failed to update book quantity");
              });
          } else {
            toast.error("This book is currently not available");
          }

          const modal = document.getElementById("my_modal_7");
          modal.checked = false;
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Already Borrowed");
      });
  };
  return (
    <div className="grid grid-cols-2 max-w-6xl gap-4 mx-auto">
      <div>
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="bg-green-100 p-10 space-y-3">
        <h1 className="text-4xl font-bold">{name}</h1>
        <div className="flex items-center">
          <p className="text-xl font-semibold">{author}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Type: <span className="font-bold text-xl">{category}</span>
          </p>
          <p>
            Quantity: <span className="font-bold text-xl">{quantity}</span>
          </p>
          <div>
            <Rating
              emptySymbol={<span className="text-black text-3xl">&#9733;</span>}
              fullSymbol={
                <span className="text-green-500 text-3xl">&#9733;</span>
              }
              initialRating={rating}
              readonly
            />
          </div>
        </div>
        <p>
          Description: <br />
          <span className="text-md font-semibold">
            {" "}
            {description}In the labyrinthine depths of a shifting reality, an
            elusive mansion stood, cloaked in perpetual twilight. Its walls
            whispered forgotten truths, while shadows danced with spectral
            echoes of time. Within its mysterious confines, Elara, a nameless
            wanderer, found herself drawn to cryptic symbols etched into the
            very fabric of existence. Each step she took led to a different
            dimension, where the boundaries of imagination blurred.In one
            reality, the mansion was a sanctuary of ancient wisdom, guarded by
            Elara, a scholar of forgotten lore. In another, it became a haunted
            relic, its halls echoing with the cries of lost souls. Time twisted
            upon itself, interweaving The mansions secrets were both a
            puzzle..............
          </span>
        </p>
        {/* modal */}
        {/* The button to open modal */}
        <label
          htmlFor="my_modal_7"
          className="btn btn-accent w-full hover:text-white hover:bg-black"
        >
          Borrow
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              {" "}
              When will you return the book?
            </h3>
            <form
              onSubmit={handleModal}
              action=""
              className="flex flex-col items-center"
            >
              <div className="form-control w-full max-w-xs">
                <label className="label"></label>
                <div className="flex justify-center">
                  <input
                    type="date"
                    name="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  className="btn btn-accent"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7"></label>
        </div>
        <Link
          to={`/read/${id}`}
          className="btn btn-accent w-full hover:text-white hover:bg-black"
        >
          Read
        </Link>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
