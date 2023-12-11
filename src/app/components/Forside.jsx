import "./Forside.css";
import Button from "./Button";
import Galleri from "./Galleri";
import ProgramButton from "./ProgramButton";

function Forside(props) {
  return (
    <>
      <h1 className="titel">FooFest</h1>
      <Button />
      <div className="invis"></div>
      <h2 className="text">
        FOOFEST IS ALL ABOUT SHARING SPECIAL <br />
        MOMENTS WITH OLD FRIENDS, NEW FRIENDS, <br />
        WEIRD FRIENDS AND FUN FRIENDS.
      </h2>
      <br />
      <ProgramButton />
      <Galleri />
    </>
  );
}

export default Forside;
