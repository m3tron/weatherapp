export const getFavorites = JSON.parse(localStorage.getItem("favorites"));

export const setFavorites = favoritesArray => {
  localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  return getFavorites;
};

export const getDefault = JSON.parse(localStorage.getItem("default"));

export const setDefault = defaultArray => {
  localStorage.setItem("default", JSON.stringify(defaultArray));
};
