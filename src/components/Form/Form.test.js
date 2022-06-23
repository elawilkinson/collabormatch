import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import Dropdown from './index.js';

test('Form loads', () => {
  render(<Dropdown/>);
  expect(screen.getByRole('button', {name: 'Get suggestions'})).toBeInTheDocument();
});

//////////This works
