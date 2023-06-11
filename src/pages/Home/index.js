import React from "react";
import FlightCardContainer from "./FlightCard/FlightCardContainer";
import Filter from "./Filters";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="container 2xl mx-auto py-5">
        <Filter />
        <FlightCardContainer />
      </div>
    </>
  );
}

export default Home;
