import { render, screen} from '@testing-library/react';
import Home from './Home';
import { DataFetching } from '../../ApiCalls/DataFetching';
import { QueryClient, QueryClientProvider } from "react-query";


jest.mock('../../ApiCalls/DataFetching');

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 500000,
      },
    },
  });

const mockHome = () => {
    return (
        <QueryClientProvider client={queryClient}>
          <Home/>
        </QueryClientProvider>
    )
  }

test('Component is Rendered',()=>{

    render(mockHome());
    const home=screen.getByTestId('home');
    expect(home).toBeTruthy();
})

test("loading is rendered",()=>{
    DataFetching.mockResolvedValue([{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    }
    ])
    render(mockHome());
    const loading=screen.getByText('Loading....');
    expect(loading).toBeTruthy()
})
