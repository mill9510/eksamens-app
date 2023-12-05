import Link from "next/link";
import "./Button.css";

function Button(props) {
  return (
    <>
      {" "}
      <button type="button" className="btn button">
        {" "}
        <Link href="/tickets">
          {props.text} <span>&#10230;</span>
        </Link>
      </button>{" "}
    </>
  );
}

export default Button;
