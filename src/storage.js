// selected location from search
export const getSelected = JSON.parse(localStorage.getItem("selected"));

export const setSelected = selectedLocation =>
  localStorage.setItem("selected", JSON.stringify(selectedLocation));

export const removeSelected = () => localStorage.removeItem("selected");

// default location
export const getDefault = JSON.parse(localStorage.getItem("default"));

export const setDefault = defaultLocation =>
  localStorage.setItem("default", JSON.stringify(defaultLocation));

// list of saved locations
export const getFavorites = JSON.parse(localStorage.getItem("favorites"));

export const setFavorites = newFavoriteLocation => {
  localStorage.setItem("favorites", JSON.stringify(newFavoriteLocation));
};
