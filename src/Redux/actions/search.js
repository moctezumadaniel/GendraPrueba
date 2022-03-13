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

export const changeStatus = (status) => {
  return {
    type: "CHANGE_STATUS",
    status,
  };
};

export const changeSpecies = (species) => {
  return {
    type: "CHANGE_SPECIES",
    species,
  };
};

export const changeType = (characterType) => {
  return {
    type: "CHANGE_TYPE",
    characterType,
  };
};

export const changeGender = (gender) => {
  return {
    type: "CHANGE_GENDER",
    gender,
  };
};
