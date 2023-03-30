import { render, screen} from '@testing-library/react';
import Home from './Home';
// import { DataFetching } from '../../ApiCalls/DataFetching';

// jest.mock('../../ApiCalls/DataFetching');

test('Component is Rendered',()=>{
    render(<Home />);
    const home=screen.getByTestId('home');
    expect(home).toBeTruthy();
})

test("loading is rendered",()=>{
    render(<Home/>);
    const loading=screen.getByText('Loading....');
    expect(loading).toBeTruthy()
})
