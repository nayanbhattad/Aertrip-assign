import { configureStore } from "@reduxjs/toolkit";

import flightsReducer from "../pages/Home/FlightCard/Config/FlightsSlice";

export const store = configureStore({
    reducer:{
        flights : flightsReducer
    }
})