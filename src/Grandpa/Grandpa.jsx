import { createContext, useState } from "react";
import Dad from "./Dad/Dad";
import Aunty from "./Dad/Uncle/Aunty/Aunty";
import Uncle from "./Dad/Uncle/Uncle";
import "./Grandpa.css";
export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it.
 * 2. Add provider for the context with a value.value could be anything
 * 3.useContext to access value in the context API.
 * */
