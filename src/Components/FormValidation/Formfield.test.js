import { render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import * as router from 'react-router'
import Formfield from "./Formfield";


const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

const state={state:{"values": {"age": "30", "email": "aravindh@gmail.com", "gender": "male", "password": "6vwheuhe", "username": "Aravindh"}}}



test("Component is Rendered", () => {
  render(<Formfield />);
  const formfield = screen.getByTestId("formfield");
  expect(formfield).toBeTruthy();
});

test("Check User Name input component", async () => {
  render(<Formfield />);
  const input = screen.getByTestId("username");
  fireEvent.blur(input);
  expect(await screen.findByText("Enter UserName")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Aravindh" } });
  fireEvent.blur(input);
  expect(input).toBeTruthy();
  expect(input.value).toBe("Aravindh");
});

test("Check email validation", async () => {
  render(<Formfield />);
  const input = screen.getByTestId("email");
   // eslint-disable-next-line react-hooks/exhaustive-deps
  await act(() => {
    fireEvent.change(input, { target: { value: "1" } });
  });
  const errorMsg = screen.getByText("Enter Valid Email");
  expect(errorMsg).toBeInTheDocument();
});

test("Check Email input component", async () => {
  render(<Formfield />);
  const input = screen.getByTestId("email");
  fireEvent.blur(input);
  expect(await screen.findByText("Enter Email")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Aravindh" } });
  fireEvent.blur(input);
  expect(await screen.findByText("Enter Valid Email")).toBeInTheDocument();
  expect(input).toBeTruthy();
  expect(input.value).toBe("Aravindh");
});

test("Check password input component", async () => {
//  await act(()=>{ render(<Formfield />)});
  render(<Formfield/>)
  const input = screen.getByTestId("password");
  fireEvent.blur(input);
  expect(await screen.findByText("Enter Password")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "6vwhe" } });
  fireEvent.blur(input);
  expect(await screen.findByText("Enter minimum 7 Digit")).toBeInTheDocument();
  expect(input).toBeTruthy();
  expect(input.value).toBe("6vwhe");
});

test("check radio button", () => {
  render(<Formfield />);
  const input = screen.getByTestId("age1to30");
  fireEvent.click(input);
  expect(input.value).toBe("30");
});

test("check radio button Error message", async () => {
  render(<Formfield />);
  const input = screen.getByTestId("age1to30");
  fireEvent.blur(input);
  expect(await screen.findByText("Select Age")).toBeInTheDocument();
  expect(input.value).toBe("30");
});

test("check dropdown input box", () => {
  render(<Formfield />);
  const input = screen.getByTestId("dropdown");
  fireEvent.change(input, { target: { value: "male" } });
  expect(input.value).toBe("male");
});

test("check dropdown input box Error Message", async () => {
  render(<Formfield />);
  const input = screen.getByTestId("dropdown");
  fireEvent.blur(input);
  expect(await screen.findByText("Select Gender")).toBeInTheDocument();
});

test("Click Submit button", async () => {
  render(<Formfield/>);
  const username = screen.getByTestId("username");
  fireEvent.change(username, { target: { value: "Aravindh" } });
  const email = screen.getByTestId("email");
  fireEvent.change(email, { target: { value: "aravindh@gmail.com" } });
  const password = screen.getByTestId("password");
  fireEvent.change(password, { target: { value: "6vwheuhe" } });
  const dropdown = screen.getByTestId("dropdown");
  fireEvent.change(dropdown, { target: { value: "male" } });
  const age = screen.getByTestId("age1to30");
  fireEvent.click(age);
  const btn = screen.queryByRole("button");
  fireEvent.submit(btn);
  await waitFor(()=>{
    expect(navigate).toHaveBeenCalledWith('/register-data',state)
  })
});
