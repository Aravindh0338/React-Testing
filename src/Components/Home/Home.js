import React from "react";
import "../Home/Home.css";
import { DataFetching } from "../../ApiCalls/DataFetching";
import Show from "../Show/Show.js";
import { useQuery } from "react-query";

function Home () {
  // const [data, setData] = useState();

 
    const {isLoading,isFetching,isError,data,refetch}= useQuery('data',DataFetching)
    console.log(data)
  
  return (
    <div className="container" data-testid="home">
      {data ? (
        data.map((item) => <Show key={item.id} item={item} />)
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Home;
