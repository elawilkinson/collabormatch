import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import ProjectInterestField from "./index.js";


test('Project Interest Field loads', () => {
  render(<ProjectInterestField/>);
  expect(screen.getByRole('option', {name: "Sports"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Games"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Photography"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Fashion"})).toBeInTheDocument();

});

////////////////This works
