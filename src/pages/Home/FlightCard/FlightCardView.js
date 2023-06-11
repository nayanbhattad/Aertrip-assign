import React from "react";
import { PropTypes } from "prop-types";
import { Paper } from "@mui/material";

function FlightCardView({ flight }) {
  const {airline, airlineColor, departTime, arriveTime, totalTime, flightJourney, flightCode, farePrice, departDate, arriveDate} = flight

  const viaJourney = flightJourney.filter((city, index)=>{
    return (index !== 0 && index !== flightJourney.length-1)
 })

 const nextDay =  arriveDate.split('-')[2] -departDate.split('-')[2]
 console.log(nextDay)

 const toHoursAndMinutes = (totalSeconds) => {
    const totalMinutes = Math.floor(totalSeconds / 60);
  
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
  
    return { h: hours, m: minutes, s: seconds };
  }

  return (
    <div className="mt-5">
      <Paper variant="outlined" className="px-5 py-8">
        <div className="flex justify-between items-center">
          <div className="left-sec w-1/4 flex gap-5 items-center">
            <div className={`${flightCode !=='AI' && `bg-[${airlineColor}]`}  p-1 rounded`}>
              <img src={`https://cdn.aertrip.com/resources/assets/scss/skin/img/airline-master/${flightCode}.png`} alt="flight logo" width={30} height={30} />
            </div>
            <p className="flight-title font-bold">{airline}</p>
          </div>
          <div className="mid-sec w-1/2">
            <div className="duration-sec flex justify-between">
              <p className="start-time">{departTime}</p>
              <p className="flight-duartion">{`${toHoursAndMinutes(totalTime).h}h ${toHoursAndMinutes(totalTime).m}m`}</p>
              <p className="end-time">{arriveTime}<sup>{ nextDay> 0 ? `+${nextDay}` : ''}</sup></p>
            </div>
            <div className="route-sec flex justify-between">
              <p className="start-city font-bold">{flightJourney[0]}</p>
              <div className=" flex justify-around border-t-2 border-dashed w-full mt-3 mx-5">
                {viaJourney.map((city, index)=>{
                    return (
                        <p key={index} className="text-xs pt-1">{city}</p>
                    )
                })}
              </div>
              <p className="end-city font-bold">{flightJourney[flightJourney.length-1]}</p>
            </div>
          </div>
          <div className="right-sec w-1/4 text-right">
            <p className="fare-sec font-bold px-3 py-1 rounded-sm bg-[#ffddb2] inline-block">
              &#x20B9; {`${farePrice}`} 
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
}

  
FlightCardView.propTypes = {
    airline: PropTypes.string,
    airlineColor: PropTypes.string,
    departTime: PropTypes.string,
    arriveTime: PropTypes.string,
    totalTime: PropTypes.string,
    flightJourney: PropTypes.string,
    flightCode: PropTypes.string,
    farePrice: PropTypes.number,
    departDate: PropTypes.string,
    arriveDate: PropTypes.string
};

export default FlightCardView;
