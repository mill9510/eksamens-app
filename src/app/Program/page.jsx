import Image from "next/image";
import BandCard from "../components/BandCard";
import "../globals.css";
import "./Program.css";
import Navbar from "../components/Navbar";

export default async function Bands() {
  return (
    <main>
      <Navbar />
      <section>
        <BandCard />
      </section>
    </main>
  );
}
