import "./Forside.css";
import Button from "./Button";

function Forside(props) {
  return (
    <>
      <h1 className="titel">{props.titel}</h1>
    </>
  );
}

export default Forside;
