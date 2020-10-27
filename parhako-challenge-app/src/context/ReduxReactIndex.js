import React, { useEffect, useContext } from "react";
import Routes from "../route/Router";
import { CustomProvider } from "./GlobalState";

const ReduxReactIndex = (props) => {

  return (
    <CustomProvider>
      <Routes />
    </CustomProvider>
  );
};

export default ReduxReactIndex;
