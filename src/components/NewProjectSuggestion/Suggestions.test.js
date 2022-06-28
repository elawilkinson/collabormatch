import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import NewProjectSuggestion from "./index.js";

test('Suggestions load', () => {
  render(<NewProjectSuggestion/>);
  expect(screen.getByRole('button', {name: 'Send suggestion'})).toBeInTheDocument();
});

/////////////This works
