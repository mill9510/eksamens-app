import Image from "next/image";
import BandCard from "../components/BandCard";
import "../globals.css";
import "./Program.css";
import Navbar from "../components/Navbar";

export default async function Bands() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>PROGRAM</h1>
        <section>
          <BandCard />
        </section>
      </main>
    </>
  );
}
