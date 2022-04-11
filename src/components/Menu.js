import { useState } from "react";
import SearchBar from "./SearchBar";

const Menu = ({ setLocation, setLoading }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="absolute top-4 right-4 z-50 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        showMenu
      </div>
      <div
        className={` ${
          !showMenu ? "-translate-x-full" : "translate-x-0 "
        } duration-500 bg-sky-900/90 h-screen fixed z-40 pt-8`}
      >
        <SearchBar setLocation={setLocation} setLoading={setLoading} />
      </div>
    </>
  );
};

export default Menu;
