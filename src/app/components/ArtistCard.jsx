import Image from "next/image";
import "./ArtistCard.css";
import Link from "next/link";

export default async function BandCard() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  const { name, members, genre, logoCredits, logo, bio, slug } = data;

  console.log(data);

  return (
    <>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((band) => {
          return (
            <Link legacyBehavior key={slug} className="link" href={`./bands/${band.slug}`}>
              <article>
                <img src={band.logo} alt="" />
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
