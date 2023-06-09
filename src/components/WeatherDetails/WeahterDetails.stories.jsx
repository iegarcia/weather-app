import React from "react";
import WeatherDetails from "./WeatherDetails";

export default {
  title: "WeahterDetails",
  component: WeatherDetails,
};

export const WeahterDetailsExample = () => {
  return <WeatherDetails humidity={10} wind={9} />;
};
