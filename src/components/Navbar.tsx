import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className="flex justify-between items-center mb-2 sm:mr-8 sm:flex-col sm:items-start sm:justify-normal sm:gap-5">
      <Link to="/">
        <h1 className="text-3xl text-slate-950 font-semibold cursor-pointer">
          Eng.
        </h1>
      </Link>
      <div className="flex gap-5 sm:flex-col sm:gap-2 transition-all ">
        <NavLink to={"/"} className="text-slate-500 ">
          <h2>Home</h2>
        </NavLink>
        <NavLink to={"/about"} className="text-slate-500  ">
          <h2>About</h2>
        </NavLink>
        <NavLink to={"/contact"} className="text-slate-500  ">
          <h2>Contact</h2>
        </NavLink>
      </div>
    </aside>
  );
};

export default Navbar;
