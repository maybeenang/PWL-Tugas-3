import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "../creds.json";
import { JWT } from "google-auth-library";

const ContactPage = () => {
  // const SCOPES = [
  //   "https://www.googleapis.com/auth/spreadsheets",
  //   "https://www.googleapis.com/auth/drive.file",
  // ];
  // const jwt = new JWT({
  //   email: creds.client_email,
  //   key: creds.private_key,
  //   scopes: SCOPES,
  // });

  // const doc = new GoogleSpreadsheet(
  //   "1QMfF7bB8PdWnTOdvqWcLwWoZY4c2tgpctabbVRNtVdg",
  //   jwt
  // );

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(creds.client_email);
    // await doc.useServiceAccountAuth({
    //   client_email: creds.client_email,
    //   private_key: creds.private_key,
    // });
    // await doc.loadInfo();
    // const sheet = doc.sheetsByIndex[0];
    // await sheet.addRow({
    //   Name: e.currentTarget.name.value,
    //   Email: e.currentTarget.email.value,
    //   Message: e.currentTarget.message.value,
    // });
    // e.currentTarget.reset();
  };

  return (
    <div className=" md:w-screen max-w-lg ">
      <h1 className="text-3xl text-slate-950 pb-5 font-medium">
        Let's get in touch with me
      </h1>

      <p className="py-2 text-lg text-slate-600">
        feel free to contact me, if you want to ask something or just want to
        say hello.
      </p>

      <form className="" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-slate-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
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
            className="border border-slate-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
          ></textarea>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-slate-600 text-white px-6 py-1.5 rounded-full mt-2 text-center "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
