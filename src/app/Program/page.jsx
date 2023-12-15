import Image from "next/image";
import "../globals.css";
import Navbar from "../components/Navbar";
import ProgramCard from "../components/ProgramCard";
import Forside from "../components/Forside";
import Button from "../components/Button";

export default async function Program() {
  return (
    <>
      <main>
        <Forside
          titel="Program"
          text="KEEP YOURSELF UPDATED DURING THE FESTIVAL WEEK,
          AND FIND OUT WHAT SCENES YOUR FAVORITE BANDS 
          PLAY AT "
        />
        <section>
          <ProgramCard />
        </section>
      </main>
    </>
  );
}
