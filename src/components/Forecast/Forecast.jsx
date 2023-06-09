import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import ForecastItem from "../ForecastItem";
import { validValues } from "../IconState";

const renderForcastItem = (forecast) => {
  const { weekDay, hour, state, temperature } = forecast;
  return (
    <Grid item key={`${weekDay}-${hour}`}>
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        temperature={temperature}
        state={state}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {forecastItemList.map((forecast) => renderForcastItem(forecast))}
      </Grid>
    </div>
  );
};

// forecast item list es una lista de elementos por lo que estos deben tener una determinada estructuras
//  weekDay: PropTypes.string.isRequired,
//   hour: PropTypes.number.isRequired,
//   state: PropTypes.oneOf(validValues).isRequired,
//   temperature: PropTypes.number.isRequired,

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
