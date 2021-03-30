export const addEntry = (data) => {
  return {
    type: "ADD_NEW",
    payload: data,
  };
};

export const removeEntry = (id) => {
  return {
    type: "REMOVE_ENTRY",
    payload: id,
  };
};

export const changeYear = (year) => {
  return {
    type: year,
  };
};
