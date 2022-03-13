const initialState = {
  type: "character",
  search: "",
  status: "",
  species: "",
  characterType: "",
  gender: "",
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
    case "CHANGE_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "CHANGE_SPECIES":
      return {
        ...state,
        species: action.species,
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        characterType: action.characterType,
      };
    case "CHANGE_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    default:
      return state;
  }
};

export default searchReducer;
