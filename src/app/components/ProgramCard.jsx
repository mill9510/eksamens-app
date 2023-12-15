import "./ProgramCard.css";

export default async function ProgramCard() {
  const res = await fetch("https://pollen-flawless-aerosteon.glitch.me/schedule");
  const data = await res.json();

  console.log(data);

  const stages = Object.keys(data);

  return (
    //dette er main componenten, som mapper gennem const stages
    <article className="box">
      {stages.map((stage, obj) => (
        <section className="box" key={obj}>
          <h3>{stage}</h3>
          <OneScene data={data[stage]} />
        </section>
      ))}
    </article>
  );
}

function OneScene({ data }) {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div className="oneScene">
      {daysOfWeek.map((day, obj) => (
        <DayOneStage key={obj} data={data} day={day} />
      ))}
    </div>
  );
}

function DayOneStage({ data, day }) {
  return (
    <div className="oneDay">
      <h4 className="day">{day}</h4>
      {data[day].map((act, obj) => (
        <h5 className="bands" key={obj}>
          {act.act} FROM {act.start} - {act.end}
        </h5>
      ))}
    </div>
  );
}
