export const loadCharacters = (payload) => {
  return {
    type: "LOAD_CHARACTERS",
    payload,
  };
};

export const loadEpisodes = (payload) => {
  return {
    type: "LOAD_EPISODES",
    payload,
  };
};

export const loadError = (payload) => {
  return {
    type: "LOAD_ERROR",
    payload,
  };
};

export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    page,
  };
};
