// import { useContext } from "react";
// import { AssetContext } from "../../../Grandpa";

const Special = ({ asset }) => {
  //   const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special Person</h2>
      <p>has: {asset}</p>
      {/* <p>Also has: {gift}</p> */}
    </div>
  );
};

export default Special;
