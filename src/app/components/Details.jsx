import React from "react";
import styles from "../components/details.css";

export default async function Details() {
  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();
  const { area, spots, available } = data;

  function handleReservePut() {
    fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: {
        area: String,
        amount: Number,
      },
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  console.log(data);
  return (
    <>
      <div className="flexArea">
        {data.map((area) => {
          return (
            <div key={area}>
              <article className="areaInput">
                <label>{area.area}</label>
                <input type="radio" />
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
}
