import Image from "next/image";
import Forside from "../components/Forside";
import "../globals.css";
import "./Artists.css";
import Navbar from "../components/Navbar";
import ArtistCard from "../components/ArtistCard";

export default async function Bands() {
  return (
    <>
      <Forside
        titel="Artists"
        text="THIS YEARS LINEUP INCLUDES BOTH NATIONAL AND 
INTERNATIONAL ARTISTS. WHAT THEY ALL HAVE IN COMMON
IS A BURNING PASSION FOR MUSIC AND ART. "
      />
      <h3>JULY 2. –– JULY 8.</h3>
      <section className="SectionGrid">
        <ArtistCard />
      </section>
    </>
  );
}
