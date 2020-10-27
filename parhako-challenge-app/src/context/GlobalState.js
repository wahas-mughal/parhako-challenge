import React, { createContext, useReducer, useCallback } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  Photos: [],
  Errors: null,
};

export const Context = createContext(initialState);

export const CustomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action creators

  //get photos from the API
  const getPhotos = useCallback(async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      );
      const resData = await response.json();
      console.log(resData);
      dispatch({
        type: "GET_PHOTOS",
        payload: resData,
      });
    } catch (error) {
      dispatch({
        type: "ERRORS",
        payload: "An error occured",
      });
    }
  }, [dispatch]);

  //toggleFavourite method to filter the favourite image
  const toggleFavorite = (id) => {

    dispatch({
      type: "TOGGLE_FAVOURITE",
      id: id,
    });
}

    return (
      <Context.Provider
        value={{
          photos: state.Photos,
          getPhotos,
          error: state.Errors,
          toggleFavorite,
        }}
      >
        {children}
      </Context.Provider>
    );
  };
