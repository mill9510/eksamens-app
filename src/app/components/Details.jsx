"use client";
/* import React from "react";
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
 */

import React, { useState, useEffect } from "react";
import styles from "../components/details.css";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

export default function Details() {
  const dispatch = useContext(BasketUpdaterContext);
  const [selectedArea, setSelectedArea] = useState(null);

  const [reserveData, setReserveData] = useState({
    area: "",
    amount: 0,
  });

  const [areas, setAreas] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();

      console.log("Fetched data:", data); // Log the entire data object

      if (Array.isArray(data)) {
        setAreas(data.map((area) => area.area));
      } else {
        console.error("Invalid data structure or missing 'area' property");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReservePut = async () => {
    if (!selectedArea) {
      console.error("Please select an area");
      return;
    }

    const body = JSON.stringify({
      area: selectedArea,
      amount: reserveData.amount,
    });

    try {
      const response = await fetch("http://localhost:8080/reserve-spot", {
        method: "PUT",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Reservation successful");
        dis;
        // You may want to handle the response further if needed
      } else {
        console.error("Reservation failed");
        // Handle the failure, maybe show an error message to the user
      }
    } catch (error) {
      console.error("Error during reservation:", error);
      // Handle the error, maybe show an error message to the user
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserveData({
      ...reserveData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flexArea">
        {areas.map((area) => (
          <div key={area}>
            <article className="areaInput">
              <label>
                {area}
                <input type="radio" name="area" value={area} onChange={() => setSelectedArea(area)} />
              </label>
            </article>
          </div>
        ))}
      </div>
      <div>
        <label>Amount: </label>
        <input type="number" name="amount" value={reserveData.amount} onChange={handleInputChange} />
        <button onClick={handleReservePut}>Reserve Spot</button>
      </div>
    </>
  );
}
