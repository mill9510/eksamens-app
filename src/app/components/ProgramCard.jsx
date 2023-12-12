import Image from "next/image";

export default async function ProgramCard() {
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();

  console.log(data);

  return (
    <>
      {data.midgaard.map((schedule) => {
        return (
          <>
            <article key={data.midgaard}>
              <section>{data.midgaard.mon}</section>
            </article>
          </>
        );
      })}
    </>
  );
}
