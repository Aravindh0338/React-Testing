import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { DataFetching } from "../../ApiCalls/DataFetching";
import Show from "../Show/Show.js";

function Home () {
  const [data, setData] = useState();

  useEffect(()=>{
    DataFetching().then((res)=>{
      setData(res)
    })
  },[])

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
