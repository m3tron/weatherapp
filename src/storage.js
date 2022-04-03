export const getFavorites = JSON.parse(localStorage.getItem("favorites"));

export const setFavorites = favoritesArray => {
  localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  return getFavorites;
};

export const getDefault = JSON.parse(localStorage.getItem("default"));

export const setDefault = defaultArray => {
  localStorage.setItem("default", JSON.stringify(defaultArray));
};

export const getSelected = JSON.parse(localStorage.getItem("current"));

export const setSelected = currentArray =>
  localStorage.setItem("current", JSON.stringify(currentArray));
