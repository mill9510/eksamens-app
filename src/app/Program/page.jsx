import Image from "next/image";
import "../globals.css";
import Navbar from "../components/Navbar";
import ProgramCard from "../components/ProgramCard";

export default async function Program() {
  return (
    <>
      <main>
        <h1>PROGRAM</h1>
        <h2>THIS IS AN OVERVIEW OF THIS YEARS PROGRAM, WHICH WILL KEEP YOU UPDATED DURING THE FESTIVAL WEEK</h2>
        <button>BUY YOUR TICKET ---</button>
        <section>
          <ProgramCard />
        </section>
      </main>
    </>
  );
}
