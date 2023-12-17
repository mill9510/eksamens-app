"use client";
import Link from "next/link";
import "./Button.css";
import { useRouter } from "next/navigation";

function Button(props) {
  const router = useRouter();
  function handleClick() {
    router.push("/tickets");
  }
  return (
    <>
      {" "}
      <button onClick={handleClick} type="button" className="btn button">
        {" "}
        {props.text} <span>&#10230;</span>
      </button>{" "}
    </>
  );
}

export default Button;
