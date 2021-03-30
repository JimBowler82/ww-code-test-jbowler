import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const liabilityReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          ...action.payload,
        },
      ];
    case "REMOVE_ENTRY":
      return state.filter((entry) => entry.id !== action.payload);
    default:
      return state;
  }
};

const yearReducer = (state = "2018-04-06", action) => {
  switch (action.type) {
    case "2019":
      return (state = "2019-04-06");
    case "2018":
      return (state = "2018-04-06");
    default:
      return state;
  }
};

export const rootReducer = () =>
  combineReducers({
    routing: routerReducer,
    liabilities: liabilityReducer,
    year: yearReducer,
  });

export default rootReducer();
