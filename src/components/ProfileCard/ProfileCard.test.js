import { test, expect, jest } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import ProfileCard from "./index.js";

// test('Profile Cards loads', () => {
//   render(<ProfileCard/>);
//   expect(screen.getAllByRole('img')).toBeInTheDocument();
// });

//////// Cannot read properties of undefined (reading 'map') 

let info = [
    {name: "Project interest"},
    {name: "Project Type"},
    {name: "Strength"},
    {name: "Availability"},

];

test('Profile Cards loads', () => {
  render(<ProfileCard info = {info}/>);
  expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(info.length);
});

/////This works!
