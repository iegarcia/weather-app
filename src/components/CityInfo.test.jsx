import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo/CityInfo";

test("CityInfo render", async () => {
  // AAA
  //Arrange -> Armar
  //Act -> Ejecutar
  //Assert -> Comprobar
  const city = "Buenos Aires";
  const country = "Argentina";

  const { findAllByRole } = render(
    <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
  );

  const cityAndCountryComponents = await findAllByRole("heading");

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
