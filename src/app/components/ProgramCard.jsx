import Image from "next/image";
import "./ProgramCard.css";
import Link from "next/link";

export default async function BandCard() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  const { name, members, genre, logoCredits, logo, bio, slug } = data;

  console.log(data);

  return (
    <>
      {data.map((band) => {
        return (
          <article key={slug}>
            <img src={band.logo} alt="" />
            <section>
              <h2>{band.name}</h2>
              <h4>MUSIC GENRE {band.genre}</h4>
              <Link href={`./bands/${band.slug}`}>READ MORE ABOUT {band.name}</Link>
            </section>
          </article>
        );
      })}
    </>
  );
}
