import React from "react";
import Forecast from "./Forecast";

export default {
  title: "Forecast",
  component: Forecast,
};

const forecastItemList = [];
const ForecastExample = () => <Forecast forecastItemList={forecastItemList} />;
