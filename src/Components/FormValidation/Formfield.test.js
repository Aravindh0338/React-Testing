import { render, screen,fireEvent} from '@testing-library/react';
import Formfield from './Formfield';


test('Component is Rendered',()=>{
    render(<Formfield/>);
    const formfield=screen.getByTestId('formfield');
    expect(formfield).toBeTruthy();
})

test('Check User Name input component',async ()=>{
     render(<Formfield/>);
    const input = screen.getByTestId('username');
    fireEvent.blur(input);
    expect(await screen.findByText("Enter UserName")).toBeInTheDocument()
    fireEvent.change(input, { target: { value: "Aravindh" } });
    fireEvent.blur(input);
    expect(input).toBeTruthy();
    expect(input.value).toBe("Aravindh");
})

test('Check Email input component',async ()=>{
    render(<Formfield/>);
   const input = screen.getByTestId('email');
   fireEvent.blur(input);
   expect(await screen.findByText("Enter Email")).toBeInTheDocument()
   fireEvent.change(input, { target: { value: "Aravindh" } });
   fireEvent.blur(input);
   expect(await screen.findByText("Enter Valid Email")).toBeInTheDocument()
   expect(input).toBeTruthy();
   expect(input.value).toBe("Aravindh");
})

test('Check password input component',async ()=>{
    render(<Formfield/>);
   const input = screen.getByTestId('password');
   fireEvent.blur(input);
   expect(await screen.findByText("Enter Password")).toBeInTheDocument()
   fireEvent.change(input, { target: { value: "6vwhe" } });
   fireEvent.blur(input);
   expect(await screen.findByText("Enter minimum 7 Digit")).toBeInTheDocument()
   expect(input).toBeTruthy();
   expect(input.value).toBe("6vwhe");
})

test('check radio button',()=>{
    render(<Formfield/>);
    const input = screen.getByTestId('age1to30');
    fireEvent.click(input)
    expect(input.value).toBe("30");
})

test('check dropdown input box',()=>{
    render(<Formfield/>);
    const input = screen.getByTestId('dropdown');
    fireEvent.change(input, { target: { value: "bike" } });
    expect(input.value).toBe("bike");
})