import igIcon from "../assets/icons/instagram.svg";
import gmailIcon from "../assets/icons/gmail.svg";
import githubIcon from "../assets/icons/github.svg";
import linkInIcon from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="text-sm  border-t-2 py-2 ">
      {" "}
      <p className="text-base text-slate-600 pb-3 ">Contact me via</p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <a
            href="https://www.instagram.com/maybeenang/"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 flex gap-2 items-center text-xs"
          >
            <img src={igIcon} alt="igIcon" className="w-4" />
            maybeenang
          </a>
          <a
            href="mailto:melangpermadani@.gmail.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 flex gap-2 items-center text-xs"
          >
            <img src={gmailIcon} alt="igIcon" className="w-4" />
            melangpermadani@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://www.github.com/maybeenang"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 flex gap-2 items-center text-xs"
          >
            <img src={githubIcon} alt="igIcon" className="w-4" />
            maybeenang
          </a>
          <a
            href="https://id.linkedin.com/in/maybeenang"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 flex gap-2 items-center text-xs"
          >
            <img src={linkInIcon} alt="igIcon" className="w-4" />M Elang
            Permadani
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
