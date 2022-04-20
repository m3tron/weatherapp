import { useState } from "react";
import SearchBar from "./SearchBar";

const Menu = ({ setLocation, setLoading }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="md:w-[768px]">
        <div
          className={`top-4 right-4 z-50 cursor-pointer ${
            !showMenu ? "absolute" : "fixed"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu ? (
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          ) : (
            <i className="fa-solid fa-xmark text-white"></i>
          )}
        </div>
      </div>
      <div
        className={` ${
          !showMenu ? "-translate-x-full" : "translate-x-0 "
        } duration-500 bg-sky-900/90 h-screen fixed z-40 pt-12 w-screen`}
      >
        <SearchBar setLocation={setLocation} setLoading={setLoading} />
      </div>
    </>
  );
};

export default Menu;
