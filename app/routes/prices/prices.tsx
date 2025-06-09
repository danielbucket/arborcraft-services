import { StyledPrices } from "./styled.prices.js";

export default function Prices() {
  return (
    <StyledPrices>
      <h1>Prices</h1>
      <p>Welcome to the ArborCraft Prices page!</p>
      <p>Here you can find a list of our prices.</p>
      <ul>
        <li>Woodworking and Carpentry: $50/hour</li>
        <li>Home Repair: $40/hour</li>
        <li>Handyman: $30/hour</li>
      </ul>
    </StyledPrices>
  );
};

export function meta() {
  return [
    { title: "ArborCraft Prices" },
    { name: "description", content: "Welcome to ArborCraft Prices!" },
  ];
};