import { fireEvent, getByText, render, screen} from '@testing-library/react';
import { useState as useStateMock } from 'react';
import Statemock from "./Statemock";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))

  const setState = jest.fn()

  beforeEach(() => {
    useStateMock.mockImplementation(() => [0, setState])
  })

test('mock state',()=>{
    render(<Statemock/>);
    setState();
    expect(setState).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByText('Increase'))
    //    screen.debug(expect(setState).toHaveBeenCalledTimes(1))
    // expect(setState.mock.results[0].value).toBe(11)
    // expect(setState.mock.results[0].value).toBe(11)
})