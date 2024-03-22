import Dad from "./Dad/Dad";
import Aunty from "./Dad/Uncle/Aunty/Aunty";
import Uncle from "./Dad/Uncle/Uncle";
import "./Grandpa.css";
const Grandpa = () => {
  return (
    <div className="grandpa  flex">
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
