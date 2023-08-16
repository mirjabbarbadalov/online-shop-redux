const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")),
  //I changed this part, and I think it works properly.
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
