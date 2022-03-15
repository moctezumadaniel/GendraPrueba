const initialState = {
  contentType: "",
  data: "",
  page: "",
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CHARACTERS":
      return { ...state, contentType: "character", data: action.payload };
    case "LOAD_EPISODES":
      return { ...state, contentType: "episode", data: action.payload };
    case "LOAD_ERROR":
      return { ...state, contentType: "error", data: action.payload };
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default contentReducer;
