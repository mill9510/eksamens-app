import Image from "next/image";

import "../globals.css";
import "./Artists.css";
import Navbar from "../components/Navbar";
import ArtistCard from "../components/ArtistCard";

export default async function Bands() {
  return (
    <>
      <main>
        <h1>ARTISTS</h1>
        <h2>THIS YEARS LINEUP INCLUDES BOTH NATIONAL AND INTERNATIONAL ARTISTS. WHAT THEY ALL HAVE IN COMMON IS A BURNING PASSION FOR MUSIC AND ART.</h2>
        <h3>JULY 2. –– JULY 8.</h3>
        <button>THIS YEARS PROGRAM ---</button>
        <section>
          <ArtistCard />
        </section>
      </main>
    </>
  );
}
