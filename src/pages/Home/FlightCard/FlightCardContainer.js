import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightCardView from "./FlightCardView";
import { fillFlights } from "./Config/FlightsSlice";

function FlightCardContainer() {
  const flights = useSelector((state) => state.flights.flightsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillFlights());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFlights = (flights) => {
    return flights.map((flight, index) => {
      return (
        <div key={index}>
          <FlightCardView flight={flight} />
        </div>
      );
    });
  };

  return (
    <div>
      {flights.length > 0 && (
        <>
          <p>Total: {flights.length} flights</p>
          {renderFlights(flights)}
        </>
      )}
    </div>
  );
}

export default FlightCardContainer;
