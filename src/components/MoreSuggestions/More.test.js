import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import MoreSuggestions from "./index.js";

test('More loads', () => {
  render(<MoreSuggestions/>);
  expect(screen.getByRole('button', {name: 'Click For More Suggestions'})).toBeInTheDocument();
});

////////////This works!
