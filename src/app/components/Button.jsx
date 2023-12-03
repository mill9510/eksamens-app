import "./Button.css";

function Button() {
  return (
    <>
      {" "}
      <button type="button" className="btn button">
        {" "}
        <a href="#">
          {" "}
          Buy your ticket now <span>&#10230;</span>
        </a>
      </button>{" "}
    </>
  );
}

export default Button;
