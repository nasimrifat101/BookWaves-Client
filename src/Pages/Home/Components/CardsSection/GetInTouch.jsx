import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../../../Hooks/useAuth";

const GetInTouch = () => {
    const {user} = useAuth();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          import.meta.env.VITE_FIRST_KEY,
          import.meta.env.VITE_SEC_KEY,
          form.current,
          import.meta.env.VITE_THIRD_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Email sent Successfully')
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            toast.warn('Sending Failed')
          }
        );
    };

  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-5 my-10">
      <div>
        <h1 className="text-4xl font-bold my-10 px-2 lg:px-0">Get In Touch</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-5 p-3 lg:p-0">
          <h1 className="text-xl font-semibold text-gray-300">
            My Name is{" "}
            <input
              type="text"
              defaultValue={user?.displayName}
              className="border-b-2 w-full outline-none font-bold text-black"
              name="user_name"
              required
            />
          </h1>
          <h1 className="text-xl font-semibold text-gray-300">
            Email{" "}
            <input
              type="email"
              defaultValue={user?.email}
              className="border-b-2 w-full outline-none font-bold text-black"
              name="user_email"
              required
            />
          </h1>
          <h1 className="text-xl font-semibold text-gray-300">
            Subject{" "}
            <input
              type="text"
              className="border-b-2 w-full outline-none font-bold text-black"
              name="subject"
              required
            />
          </h1>
          <h1 className="text-xl font-semibold text-gray-300">
            Detail Description{" "}
            <textarea
              type="text"
              className="border-b-2 w-full outline-none font-bold text-black"
              name="message"
              required
            />
          </h1>
          <input
            type="submit"
            value="Send"
            className="btn w-full flex justify-start hover:bg-gradient-to-l from-green-300 ... hover:justify-end"
          />
        </form>
      </div>
      <div>
        <img
          src="https://i.postimg.cc/CKr841Vr/3675555.jpg"
          alt=""
          className="w-full hidden lg:block"
        />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default GetInTouch;
