import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [inputData, setInputData] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAnonymous) {
      setInputData({
        name: "Anonymous",
        email: "-",
        message: inputData.message,
      });
    }

    setLoading(true);
    toast
      .promise(
        axios.post("https://sheetdb.io/api/v1/gi981254bw7lm", inputData),
        {
          loading: "Sending message...",
          success: "Message sent!",
          error: "Failed to send message",
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      )
      .then(() => {
        setInputData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" md:w-screen max-w-lg ">
      <h1 className="text-3xl text-slate-950 pb-5 font-medium">
        Let's get in touch with me
      </h1>

      <p className="py-2 text-lg text-slate-600">
        feel free to contact me, if you want to ask something or just want to
        say hello. if u want to send a message anonymously, just check the box
        below {":)"}
      </p>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isAnonymous}
          onChange={() => setIsAnonymous(!isAnonymous)}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-slate-600">
          Send anonymously
        </span>
      </label>

      <form className="" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-slate-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={isAnonymous ? "Anonymous" : inputData.name}
            disabled={isAnonymous}
            onChange={handleInputChange}
            className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={isAnonymous ? "-" : inputData.email}
            disabled={isAnonymous}
            onChange={handleInputChange}
            className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-slate-600">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            value={inputData.message}
            onChange={
              handleInputChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
            }
            className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
          ></textarea>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            disabled={loading}
            className={`px-5 py-2 rounded-full text-white ${
              loading ? "bg-slate-400" : "bg-slate-600"
            } `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
