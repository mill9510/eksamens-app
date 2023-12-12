export default async function ProgramCard() {
  const res = await fetch("https://pollen-flawless-aerosteon.glitch.me/schedule");
  const data = await res.json();

  console.log(data);

  const stages = Object.keys(data);

  return (
    <article>
      {stages.map((stage, obj) => (
        <section key={obj}>
          <h2>{stage}</h2>
          <OneScene data={data[stage]} />
        </section>
      ))}
    </article>
  );
}

function OneScene({ data }) {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div>
      {daysOfWeek.map((day, obj) => (
        <DayOneStage key={obj} data={data} day={day} />
      ))}
    </div>
  );
}

function DayOneStage({ data, day }) {
  return (
    <div>
      <h2>{day}</h2>
      {data[day].map((act, obj) => (
        <h2 key={obj}>{act.act}</h2>
      ))}
    </div>
  );
}
