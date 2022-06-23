import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import AvailabilityField from "./index.js";

test('Availability Field loads', () => {
  render(<AvailabilityField/>);
  expect(screen.getByRole('option', {name: "Weekends"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Evenings"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Flexible"})).toBeInTheDocument();
  

});

/////This works!
