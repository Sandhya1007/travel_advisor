import React from "react";
// import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <div>
      Travel Advisor
      <Header />
      <List />
      <Map />
      <PlaceDetails />
    </div>
  );
};

export default App;
