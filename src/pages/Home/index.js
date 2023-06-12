import React from "react";
import FlightCardContainer from "./FlightCard/FlightCardContainer";
import Filter from "./Filters";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="container 2xl mx-auto p-8 min-w-[700px]">
        <Filter />
        <FlightCardContainer />
      </div>
    </>
  );
}

export default Home;
