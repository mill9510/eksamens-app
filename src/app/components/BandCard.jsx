import Image from "next/image";
import "./BandCard.css";

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
            <h1>{band.name}</h1>
            <h2>{band.members}</h2>
            <h3>THEY PLAY {band.genre}</h3>
            <p>{band.bio}</p>
          </article>
        );
      })}
    </>
  );
}
