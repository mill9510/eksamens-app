import Image from "next/image";
import BandCard from "../components/BandCard";
import "../globals.css";
import "./Program.css";
import Navbar from "../components/Navbar";
import ProgramCard from "../components/ProgramCard";

export default async function Bands() {
  return (
    <>
      <main>
        <h1>ARTISTS</h1>
        <h2>THIS YEARS LINEUP INCLUDES BOTH NATIONAL AND INTERNATIONAL ARTISTS. WHAT THEY ALL HAVE IN COMMON IS A BURNING PASSION FOR MUSIC AND ART.</h2>
        <button>THIS YEARS PROGRAM ---</button>
        <section>
          <ProgramCard />
        </section>
      </main>
    </>
  );
}
