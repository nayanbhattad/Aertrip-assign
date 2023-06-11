import React, { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Chip from "@mui/material/Chip";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";

export default function FilterChips({ label, active, handleClear, children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef();

  const handleClick = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClear()
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Chip
        color={`${active ? 'success' : 'secondary'}`}
        ref={ref}
        label={label}
        onClick={handleClick}
        onDelete={!active ? handleClick : handleDelete}
        deleteIcon={!anchorEl && !active ?(<ArrowDropDownIcon />)  : (active ? <CloseIcon /> :<ArrowDropUpIcon />)}
        sx={{px:1}}
      />
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {children}
        </Popover>
      </div>
    </>
  );
}


  
FilterChips.propTypes = {
    label: PropTypes.string,
    active: PropTypes.bool,
    handleClear: PropTypes.func,
    children: PropTypes.object
};
