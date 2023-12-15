import "./Forside.css";
import Button from "./Button";
import Galleri from "./Galleri";
import ProgramButton from "./ProgramButton";

function Forside(props) {
  return (
    <>
      <h1 className="titel">{props.titel}</h1>
      <Button text="Tickets" />
      <div className="invis"></div>
      <h2 className="text">{props.text}</h2>
      <br />
      <ProgramButton />
    </>
  );
}

export default Forside;
