import "./ProgramCard.css";

export default async function ProgramCard() {
  const res = await fetch("https://pollen-flawless-aerosteon.glitch.me/schedule");
  const data = await res.json();

  console.log(data);

  //object.keys henter nøglerne (keys) fra object og returnerer et array
  //i dette scenare omdanner den altså object fra schedule endpoint til et array og gemmer i const stages
  const stages = Object.keys(data);

  return (
    //dette er main componenten, som mapper gennem const stages
    //og bruger componenten OneScene til at display data fra hver enkelte scene
    <article className="ProgramSectionGrid">
      {stages.map((stage, obj) => (
        <section key={obj}>
          <h3>{stage}</h3>
          <OneScene data={data[stage]} />
        </section>
      ))}
    </article>
  );
}

//oneScene er en undercomponent, som modtager proppen data
function OneScene({ data }) {
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  //for hver daysOfWeek produceres en components kaldet DayOneStage og viser data
  //for den enkelte dag
  return (
    <div className="oneScene">
      {daysOfWeek.map((day, obj) => (
        <DayOneStage key={obj} data={data} day={day} />
      ))}
    </div>
  );
}

//DayOneStage er en underundercomponent, som viser data for en specifik dag
//og modtager props data og day
function DayOneStage({ data, day }) {
  //mapper gennem hver aktivitet; act, start og end på en given dag
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
