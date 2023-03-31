import { render, screen } from "@testing-library/react";
import Show from "./Show";
// import { DataFetching } from '../../ApiCalls/DataFetching';

// jest.mock('../../ApiCalls/DataFetching');

const data = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

test("Component is Rendered", () => {
  render(<Show item={data} />);
  const show = screen.getByTestId("card");
  expect(show).toBeTruthy();
});

test("title is rendered", () => {
  render(<Show item={data} />);
  const title = screen.getByText(
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );
  expect(title).toBeTruthy();
});

test("rate is rendered", () => {
  render(<Show item={data} />);
  const price = screen.getByText("$109.95");
  expect(price).toBeTruthy();
});

test("category is rendered", () => {
  render(<Show item={data} />);
  const category = screen.getByText(`men's clothing`);
  expect(category).toBeTruthy();
});
