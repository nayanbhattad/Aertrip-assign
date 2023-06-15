import React, { useEffect, useState } from "react";
// import SortIcon from "@mui/icons-material/Sort";
import { Button, IconButton} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import CloseIcon from "@mui/icons-material/Close";
import DownIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import UpIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import CheckIcon from '@mui/icons-material/Check';
import FilterChips from "../../../components/FilterChip";
import {fillFlights, fillPricefilter, filterFlights, sortFlights } from "../FlightCard/Config/FlightsSlice";
import RangeSlider from "../../../components/Slider";
import filterIcon from '../../../assests/images/filter-icon.svg

function Filter() {
  const [sortASc, setSortAsc] = useState(false);
  const [click, setClick] = useState(null);
  const [active, setActive] = useState(false)
  const [sortFilter, setSortFilter] = useState("")
  const [filterActive, setFilterActive] = useState(false)
  const [filterReset, setFilterReset] = useState(false)
  const [defaultPriceValue, setDefaultPriceValue] = useState([])

  const priceFilter = useSelector((state) => state.flights.priceFilter);

  const dispatch = useDispatch()

  const sortArr = [
    {
      label: "Price",
      asc: "Low to high",
      desc: "high to Low",
      key: "farePrice"
    },
    {
      label: "Departure",
      asc: "Earlier First",
      desc: "Latest First",
      key: "departTime"
    },
    {
      label: "Arrival",
      asc: "Earlier First",
      desc: "Latest First",
      key: "arriveTime"
    },
    {
      label: "Duration",
      asc: "Shortest First",
      desc: "Longest First",
      key: "totalTime"
    },
  ];

  useEffect(() => {
    dispatch(fillPricefilter());
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    setDefaultPriceValue([priceFilter.min, priceFilter.max])
  },[priceFilter])

  const hanldeSortFilterClick = () => {
    return null;
  };
  const handlePriceFilter = (range) => {
    setFilterActive(true)
    setFilterReset(false)
    dispatch(fillFlights())
    if(sortFilter){
        dispatch(sortFlights({'asc':sortASc, 'key':sortFilter}))
    }
    dispatch(filterFlights({min:range[0], max:range[1]}))
    setDefaultPriceValue(range)
  };
  const handleSort = (key,index) => {
    dispatch(sortFlights({'asc':!sortASc, 'key':key}))
    setSortFilter(key)
    setClick(index)
    setActive(true)
    setSortAsc(!sortASc);
  };
  const clearSort = () => {
    setSortFilter("")
    setClick(null)
    setSortAsc(false);
    setActive(false)
    dispatch(sortFlights({'asc':true, 'key':'farePrice'}))
  }
  const clearFilter = () => {
    setDefaultPriceValue([priceFilter.min, priceFilter.max])
    setFilterReset(true)
    setFilterActive(false)
    dispatch(fillFlights())
    if(sortFilter){
        dispatch(sortFlights({'asc':sortASc, 'key':sortFilter}))
    }
  }

  return (
    <div className="flex items-center gap-2 mb-8">
      <img alt="filter-icon" src={filterIcon} />
      <FilterChips label={`Sort ${click !==null ? `: ${sortArr[click].label}` : ''}`} active={active} handleFilterClick={hanldeSortFilterClick} handleClear={clearSort}>
        <div className=" min-w-[350px]">
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="font-bold">Sort</div>
            <div className="flex items-center gap-2">
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "capitalize", fontWeight: "600" }}
                onClick={clearSort}
              >
                clear
              </Button>
              {/* <IconButton>
                <CloseIcon />
              </IconButton> */}
            </div>
          </div>
          {sortArr.map((item, index)=>{
            return (
                <div key={index} onClick={() => handleSort(item.key, index)} className={`${click !== null  && index===click && 'bg-[#c0fadf]'} p-4 flex justify-between cursor-pointer ${click!==index &&'hover:bg-[#eee]'} `}>
                    <div className="flex gap-2">
                    <p className="font-semiBold">{item.label}</p>
                    <p className="font-light">{(click !== null  && index===click) ? (sortASc ? item.asc : item.desc):item.asc}</p>
                    <p><IconButton color="primary" disabled sx={{p:0}}>{(click !== null  && index===click) ? (sortASc ? <UpIcon color="primary" /> : <DownIcon color="primary" />):null}</IconButton></p>
                    </div>
                    <p className="justify-items-end"><IconButton color="success" disabled sx={{p:0}}>{(click !== null  && index===click)? <CheckIcon color="success"/> :null}</IconButton></p>
                </div>
            )
          })}
          
          
        </div>
      </FilterChips>
      <FilterChips label={`Price`} active={filterActive} handleClear={clearFilter}>
        <div className=" min-w-[350px]">
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="font-bold">Price</div>
            <div className="flex items-center gap-2">
              <Button
                variant="text"
                color="primary"
                sx={{ textTransform: "capitalize", fontWeight: "600" }}
                onClick={clearFilter}
              >
                clear
              </Button>
              {/* <IconButton>
                <CloseIcon />
              </IconButton> */}
            </div>
          </div>
          <div className="py-4 px-6">
            <RangeSlider min={priceFilter.min} max={priceFilter.max} handlePriceFilter={handlePriceFilter} reset={filterReset} defaultValue={defaultPriceValue} />
          </div>
        </div>
      </FilterChips>
    </div>
  );
}

export default Filter;
