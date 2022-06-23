import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import Suggestions from ".";

test('Suggestions load', () => {
  render(<Suggestions/>);
  expect(screen.getByRole('button', {name: 'Send suggestion'})).toBeInTheDocument();
});

/////////////This works
