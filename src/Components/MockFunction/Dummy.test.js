import { render, screen } from "@testing-library/react";
// import { MockFunction } from './MockFunction';
import Dummy from "./Dummy";
import { MockFunction } from "./MockFunction";

jest.mock("./MockFunction");

test("Component is Rendered", () => {
  render(<Dummy />);
  const formfield = screen.getByTestId("dummy");
  expect(formfield).toBeTruthy();
});

test("Click Login Button", () => {
  const mockCallback = jest.fn((arg) => {
    if (arg) {
      return "Hai";
    } else {
      return "Hello";
    }
  });
  mockCallback(true);
  mockCallback(false);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.results[0].value).toBe("Hai");
  expect(mockCallback.mock.results[1].value).toBe("Hello");
});

//Call same mock function and return different values
test("mock multiple calls", () => {
  MockFunction.mockReturnValueOnce("First call")
    .mockReturnValueOnce("Second call")
    .mockReturnValue("Default call");

  MockFunction();

  expect(MockFunction.mock.results[0].value).toBe("First call");
  MockFunction();
  MockFunction();
  MockFunction();
  MockFunction();
  expect(MockFunction.mock.results[1].value).toBe("Second call");
  expect(MockFunction.mock.results[2].value).toBe("Default call");
  expect(MockFunction.mock.results[3].value).toBe("Default call");
  expect(MockFunction.mock.results[4].value).toBe("Default call");
});
