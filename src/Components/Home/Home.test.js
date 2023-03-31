import { render, screen, cleanup } from "@testing-library/react";
import Home from "./Home";
import { DataFetching } from "../../ApiCalls/DataFetching";
import { QueryClient, QueryClientProvider } from "react-query";
// import { cleanup } from '@testing-library/react/types';

jest.mock("../../ApiCalls/DataFetching");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 500000,
    },
  },
});

const data = [
  {
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
  },
];

const mockHome = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

//   test("loading is rendered",()=>{
//     render(mockHome());
//     const loading=screen.getByText('Loading....');
//     expect(loading).toBeTruthy()
// })

test("Component is Rendered", () => {
  DataFetching.mockResolvedValue(() => data);
  render(mockHome());
  const home = screen.getByTestId("home");
  expect(home).toBeTruthy();
});

test("card is Rendered", () => {
  DataFetching.mockClear();
  render(mockHome());
  const show = screen.getByTestId("card");
  expect(show).toBeTruthy();
});

test("title is rendered", () => {
  render(mockHome());
  const title = screen.getByText(
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );
  expect(title).toBeTruthy();
});

test("rate is rendered", () => {
  render(mockHome());
  const price = screen.getByText("$109.95");
  expect(price).toBeTruthy();
});

test("category is rendered", () => {
  render(mockHome());
  const category = screen.getByText(`men's clothing`);
  expect(category).toBeTruthy();
});
