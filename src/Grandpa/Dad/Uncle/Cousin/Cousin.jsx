// import { useContext } from "react";
// import { AssetContext } from "../../../Grandpa";

import Friend from "../../../Friend/Friend";

const Cousin = ({ name }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>{name === "Rubaiya" && <Friend></Friend>}</section>
    </div>
  );
};

export default Cousin;
