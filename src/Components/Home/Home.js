import React from "react";
import "../Home/Home.css";
import Show from "../Show/Show.js";
import { HomeUseQuery } from "./HomeUseQuery";

function Home() {
  const { data } = HomeUseQuery();

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
