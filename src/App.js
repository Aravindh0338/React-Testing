import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Formfield from "./Components/FormValidation/Formfield";
import Dummy from "./Components/MockFunction/Dummy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 500000,
        },
    },
});
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Formfield />} />
          <Route path="/mock-function" element={<Dummy/>}/>
        </Routes>

      </Router>
      </QueryClientProvider>
  );
}

export default App;
