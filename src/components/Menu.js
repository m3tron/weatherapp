import { useState } from "react";
import SearchBar from "./SearchBar";

const Menu = ({
  setLocation,
  setLoading,
  defaultLocation,
  favoriteLocations,
  location,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex justify-end mt-4 w-screen md:max-w-[768px] md:mx-auto">
        <div
          className="mr-4 cursor-pointer"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <i
            className={`fa-solid fa-magnifying-glass text-white ${
              showMenu && "opacity-0"
            }`}
          ></i>
        </div>
      </div>
      <div
        className={`${
          !showMenu ? "-translate-x-full" : "translate-x-0 "
        } duration-500 bg-sky-900/90 h-screen fixed z-40  w-screen top-0`}
      >
        <div
          className="flex justify-end w-screen mt-4 md:max-w-[768px] md:mx-auto"
          onClick={() => setShowMenu(false)}
        >
          <div className="mr-4 cursor-pointer">
            <i className="fa-solid fa-xmark text-white"></i>
          </div>
        </div>

        <div className="pt-8">
          <SearchBar setLocation={setLocation} setLoading={setLoading} />
        </div>

        <div className="text-white text-center w-screen md:max-w-[768px] md:mx-auto">
          <div className="underline underline-offset-4">Default Location</div>
          <div
            className="cursor-pointer p-2 my-2 mx-4 bg-black/30 rounded-lg"
            onClick={() => {
              setLocation(defaultLocation);
              setShowMenu(false);
            }}
          >{`${defaultLocation.name}, ${defaultLocation.state}, ${defaultLocation.country}`}</div>
          <div className="underline mt-4 underline-offset-4">
            Favorite Locations
          </div>
          {favoriteLocations.map(favoriteLocation => (
            <div
              key={favoriteLocations.indexOf(favoriteLocation)}
              className="cursor-pointer p-2 my-2 mx-4 bg-black/30 rounded-lg"
              onClick={() => {
                setLocation(favoriteLocation);
                setShowMenu(false);
              }}
            >
              {`${favoriteLocation.name}, ${favoriteLocation.state}, ${favoriteLocation.country}`}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
