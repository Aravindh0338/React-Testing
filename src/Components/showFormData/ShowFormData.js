import React from "react";
import { useLocation } from "react-router";

function ShowFormData() {
  const { state } = useLocation();

  return (
    <div>
      <h3>{state.values.username}</h3>
      <h3>{state.values.email}</h3>
      <h3>{state.values.age}</h3>
      <h3>{state.values.gender}</h3>
    </div>
  );
}

export default ShowFormData;
