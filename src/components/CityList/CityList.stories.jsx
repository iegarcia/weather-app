import { action } from "@storybook/addon-actions";
import React from "react";
import CityList from "./CityList";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Bogota", country: "Colombia" },
  { city: "Madrid", country: "España" },
  { city: "Lima", country: "Peru" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click en city")} />
);
