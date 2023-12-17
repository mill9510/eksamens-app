import "./Forside.css";
import Button from "./Button";
import Galleri from "./Galleri";
import ProgramButton from "./ProgramButton";

function Forside(props) {
  return (
    <>
      <h1 className="titel">{props.titel}</h1>
      <Button text="Tickets" />
      <div>
        <span className="arrowDown">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-arrow-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
          </svg>
        </span>
      </div>
      <div className="invis"></div>
      <h2 className="text">{props.text}</h2>
      <br />
      <ProgramButton />
    </>
  );
}

export default Forside;
