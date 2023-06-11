import { createSlice } from "@reduxjs/toolkit";

let results = require('../../../../api-data.json');

const initialState = {
    flightsList:[],
    priceFilter:{min:null, max:null}
}

export const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers:{
        fillFlights:(state) => {
            state.flightsList = results.data.flights[0].results.j.map((item)=>{
                let finalData = {}
                let flightJourney = []
                item.leg[0].flights.forEach((flight)=>{
                    flightJourney.push(flight.fr)
                    flightJourney.push(flight.to)
                })
                finalData.farePrice = item.farepr
                finalData.departTime = item.leg[0].dt
                finalData.arriveTime = item.leg[0].at
                finalData.departDate = item.leg[0].dd
                finalData.arriveDate = item.leg[0].ad
                finalData.totalTime = item.leg[0].tt
                finalData.flightJourney = [...new Set(flightJourney)]
                finalData.flightCode = item.leg[0].flights[0].al
                finalData.airline = results.data.flights[0].results.alMaster[`${item.leg[0].flights[0].al}`].name
                finalData.airlineColor = results.data.flights[0].results.alMaster[`${item.leg[0].flights[0].al}`].bgcolor
                return finalData
            })
        },
        fillPricefilter:(state)=>{
            const price={}
            price.min = results.data.flights[0].results.f[0].pr.minPrice
            price.max = results.data.flights[0].results.f[0].pr.maxPrice
            state.priceFilter = price
        },
        sortFlights:(state,action) => {
            if(action.payload.key === 'farePrice') {
                if(action.payload.asc) {
                    state.flightsList = state.flightsList.sort((a, b) => parseFloat(a.farePrice) - parseFloat(b.farePrice));
                } else {
                    state.flightsList = state.flightsList.sort((a, b) =>b.farePrice.toString() - a.farePrice.toString());
                   
                }
            }
            
            if(action.payload.key === 'departTime') {
                if(action.payload.asc) {
                    state.flightsList = state.flightsList.sort((a, b) => parseFloat(covertHourtoMins(a.departTime)) - parseFloat(covertHourtoMins(b.departTime)));
                } else {
                    state.flightsList = state.flightsList.sort((a, b) => parseFloat(covertHourtoMins(b.departTime)) - parseFloat(covertHourtoMins(a.departTime)));
                   
                }
            }
            
            if(action.payload.key === 'arriveTime') {
                if(action.payload.asc) {
                    let sortRes = state.flightsList.sort((a, b) => parseFloat(covertHourtoMins(a.arriveTime)) - parseFloat(covertHourtoMins(b.arriveTime)));
                    state.flightsList = sortRes.sort((a, b) => a.arriveDate.split('-')[2] - b.arriveDate.split('-')[2]);
                } else {
                    let sortRes  = state.flightsList.sort((a, b) => parseFloat(covertHourtoMins(b.arriveTime)) - parseFloat(covertHourtoMins(a.arriveTime)));
                    state.flightsList = sortRes.sort((a, b) => b.arriveDate.split('-')[2] - a.arriveDate.split('-')[2]);
                   
                }
            }

            if(action.payload.key === 'totalTime'){
                if(action.payload.asc) {
                    state.flightsList = state.flightsList.sort((a, b) => parseFloat(a.totalTime) - parseFloat(b.totalTime));
                } else {
                    state.flightsList = state.flightsList.sort((a, b) =>parseFloat(b.totalTime) - parseFloat(a.totalTime));
                   
                }
            }
            
            // state.flightsList = state.flightsList.sort((a, b) => parseFloat(covertHourtoMins(a.departTime)) - parseFloat(covertHourtoMins(b.departTime)));
        },
        filterFlights:(state, action)=>{
            state.flightsList = state.flightsList.filter((flight)=> flight.farePrice >= action.payload.min && flight.farePrice <=action.payload.max)
        }
    }
})

const covertHourtoMins = (time) =>{
    const timeArr = time.split(":")
    return timeArr[0]*60 + timeArr[1]
} 

// Action creators are generated for each case reducer function
export const {fillFlights, fillPricefilter, sortFlights, filterFlights} = flightsSlice.actions

export default flightsSlice.reducer