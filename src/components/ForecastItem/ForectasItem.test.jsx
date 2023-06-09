import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

test("ForecastItem render", async () => {
  // weekDay, hour temperature
  const { findByText } = render(
    <ForecastItem weekDay="Lunes" hour={10} temperature={23} state="sunny" />
  );

  const week = await findByText(/Lunes/);
  const hour = await findByText(/10/);
  const temp = await findByText(/23/);

  expect(week).toHaveTextContent("Lunes");
  expect(hour).toHaveTextContent("10");
  expect(temp).toHaveTextContent("23");
});
