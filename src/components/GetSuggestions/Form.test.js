import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import GetSuggestions from './index.js';

test('Form loads', () => {
  render(<GetSuggestions/>);
  expect(screen.getByRole('button', {name: 'Get suggestions'})).toBeInTheDocument();
});

//////////This works
