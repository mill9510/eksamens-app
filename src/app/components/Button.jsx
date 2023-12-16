import Link from "next/link";
import "./Button.css";

function Button(props) {
  return (
    <>
      {" "}
      <button type="button" className="btn button">
        {" "}
        {props.text} <span>&#10230;</span>
      </button>{" "}
    </>
  );
}

export default Button;
