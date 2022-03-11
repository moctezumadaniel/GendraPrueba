const initialState = {
  type: "character",
  search: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH_TYPE":
      if (state.type === "episode") {
        return {
          ...state,
          type: "character",
        };
      }
      if (state.type === "character") {
        return {
          ...state,
          type: "episode",
        };
      }
      break;
    case "CHANGE_SEARCH":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};

export default searchReducer;
