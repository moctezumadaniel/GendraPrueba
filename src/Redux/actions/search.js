export const toggleSearchType = () => {
  return {
    type: "TOGGLE_SEARCH_TYPE",
  };
};

export const changeSearch = (search) => {
  return {
    type: "CHANGE_SEARCH",
    search,
  };
};
