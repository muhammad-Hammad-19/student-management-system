import React from "react";
import { replace } from "react-router";

const Main = () => {
  const naviage = navigator();
  const Next = () => {
    naviage("/Login", replace(true));
  };
  return (
    <div>
      <button onClick={Next}>Are You ready</button>
    </div>
  );
};

export default Main;
