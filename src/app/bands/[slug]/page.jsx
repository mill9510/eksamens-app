import Image from "next/image";
import { notFound } from "next/navigation";

//gør dette til en statisk page
export async function generateStaticParams() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();

  const paths = data.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

//genererer metadata til siden på page name og description
export async function generateMetadata(params) {
  const { slug } = params;
  const res = await fetch(`http://localhost:8080/bands?slug/${slug}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `${data.name}`,
  };
}

export default async function ProgramSingleView({ params }) {
  // slug gør det muligt at gøre funktionen dynamisk, derfor hentes den ind via
  // params og defineres som const og anvendes derefter i url
  const { slug } = params;
  const res = await fetch(`http://localhost:8080/bands/${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();
  const { name, members, genre, logoCredits, logo, bio } = data;
  console.log(data);

  return (
    //her returneres data, som hentes via fetch
    <main>
      <section>
        <img src={logo} alt="image that represents the band" />
        <p>{logoCredits}</p>
      </section>
      <section>
        <h2>{name}</h2>
        <h3>{members}</h3>
        <h4>{genre}</h4>
        <p>{bio ? bio : ""}</p>
      </section>
    </main>
  );
}
