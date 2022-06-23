import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import ProjectTypeField from "./index.js";

test('Project Type Field loads', () => {
  render(<ProjectTypeField/>);
  expect(screen.getByRole('option', {name: "Blog"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "To-do List"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Gallery"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Forum"})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: "Survey"})).toBeInTheDocument();
});

/////////////This works
