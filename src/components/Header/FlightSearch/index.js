import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import React from "react";

function FlightSearch() {
  return (
    <div className="shadow-md bg-white">
      <div className="container min-w-[700px] 2xl mx-auto flex items-end justify-between gap-2 2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-8">
        <div className="min-w-[275px]">
          <InputLabel htmlFor="from">From</InputLabel>
          <TextField
            fullWidth
            size="medium"
            id="from"
            variant="standard"
            color="success"
            value={"Mumbai"}
            InputProps={{
              endAdornment: <InputAdornment position="end">BOM</InputAdornment>,
            }}
          />
        </div>
        <div>
          <IconButton>
            <SyncAltIcon />
          </IconButton>
        </div>
        <div className="min-w-[275px]">
          <InputLabel htmlFor="to">To</InputLabel>
          <TextField
            fullWidth
            size="medium"
            id="to"
            variant="standard"
            color="success"
            value={"kolkata"}
            InputProps={{
              endAdornment: <InputAdornment position="end">CCU</InputAdornment>,
            }}
          />
        </div>
        <div className="min-w-[275px]">
          <InputLabel htmlFor="date">Depart</InputLabel>
          <TextField
            fullWidth
            id="date"
            variant="standard"
            color="success"
            value="11 Jun"
          />
        </div>
        <div>
          <Button variant="outlined" size="large">Search</Button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;
