import Image from "next/image";
import "./ArtistCard.css";
import Link from "next/link";

export default async function BandCard() {
  //fetcher data fra databasen med endpoint bands
  const res = await fetch(`https://pollen-flawless-aerosteon.glitch.me/bands`);
  const data = await res.json();
  const { name, members, genre, logoCredits, logo, bio, slug } = data;

  console.log(data);

  return (
    //herunder mapper jeg gennem data, hvor jeg via .sort og string method localeCompare sorterer bands i alfabetisk rækkefølge
    // i img spørger jeg om band.logo begynder med hhtp ellers skal den hente fra /logos
    <>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((band) => {
          return (
            <Link legacyBehavior key={band.slug} className="link" href={`./bands/${band.slug}`}>
              <article>
                <img src={band.logo.startsWith("http") ? band.logo : `http://localhost:8080/logos/${band.logo}`} alt="Image that represents the band" />
                <section className="overlay">
                  <h2>{band.name}</h2>
                </section>
              </article>
            </Link>
          );
        })}
    </>
  );
}
