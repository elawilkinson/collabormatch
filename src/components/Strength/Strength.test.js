import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import StrengthField from "./index.js";


test('Strength Field loads', () => {
  render(<StrengthField/>);
  expect(screen.getByRole('option', {name: "Backend"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Frontend"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Full stack"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Testing"})).toBeInTheDocument();
  
});

/////////////////This works!
