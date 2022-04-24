import SearchBar from "./SearchBar";

const Landing = ({ setLocation, favoriteLocations, setLoading }) => {
  return (
    <div className="h-screen flex flex-col">
      <SearchBar setLocation={setLocation} setLoading={setLoading} />

      {favoriteLocations.length !== 0 && (
        <div className="text-white text-center w-screen md:max-w-[768px] md:mx-auto">
          <div className="underline mt-4 underline-offset-4">
            Favorite Locations
          </div>
          {favoriteLocations.map(favoriteLocation => (
            <div
              key={favoriteLocations.indexOf(favoriteLocation)}
              className="cursor-pointer p-2 my-2 mx-4 bg-black/30 rounded-lg"
              onClick={() => {
                setLocation(favoriteLocation);
                setLoading(true);
              }}
            >
              {`${favoriteLocation.name}, ${favoriteLocation.state}, ${favoriteLocation.country}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Landing;
