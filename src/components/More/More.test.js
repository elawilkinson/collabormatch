import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import More from "./index.js";

test('More loads', () => {
  render(<More/>);
  expect(screen.getByRole('button', {name: 'Click For More Suggestions'})).toBeInTheDocument();
});

////////////This works!
