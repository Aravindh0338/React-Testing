import { render, screen,fireEvent} from '@testing-library/react';
// import { MockFunction } from './MockFunction';
import Dummy from "./Dummy";

// jest.mock('./MockFunction')  

test('Component is Rendered',()=>{
    render(<Dummy/>);
    const formfield=screen.getByTestId('dummy');
    expect(formfield).toBeTruthy();
})

test("Click Login Button",()=>{
    const mockCallback=jest.fn(arg=>{if(arg){return "Hai"} else{ return "Hello"} })

    mockCallback(true)
    mockCallback(false)
    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.results[0].value).toBe('Hai');
    expect(mockCallback.mock.results[1].value).toBe('Hello');

})




