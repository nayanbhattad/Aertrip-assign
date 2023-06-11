import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({ min, max, handlePriceFilter, reset, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue);

  useEffect(() => {
    if(reset) {
        setValue(defaultValue)
    }
    // eslint-disable-next-line
  }, [reset]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handlePriceFilter(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex justify-between pb-2">
        <div> &#x20B9; {value[0]}</div>
        <div> &#x20B9; {value[1]}</div>
      </div>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </Box>
  );
}

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  handlePriceFilter: PropTypes.func,
  reset: PropTypes.bool,
};
