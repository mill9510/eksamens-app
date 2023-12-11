"use client";
import React, { useState, useEffect } from "react";
import styles from "../components/details.css";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";
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

//EN MASSE FUCKING HJÆLP FRA NETTET, HVORFOR SKAL REQUESTES VÆRE SÅDAN DER??

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

      console.log("Fetched data:", data); // vis dataen

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
        const reservationData = await response.json(); // venter på at få id'et tilbage
        const { id } = reservationData; // destrukturerer id'et
        await fulfillReservation(id); // kalder fulfillReservation med id'et
        console.log(reservationData); // viser id'et
      } else {
        console.error("Reservation failed");
      }
    } catch (error) {
      console.error("Error during reservation:", error);
    }
  };

  const fulfillReservation = async (reservationId) => {
    try {
      const fulfillResponse = await fetch("http://localhost:8080/fullfill-reservation", {
        method: "POST",
        body: JSON.stringify({ id: reservationId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (fulfillResponse.ok) {
        console.log("Reservation fulfilled");
      } else {
        console.error("Fulfillment failed");
      }
    } catch (error) {
      console.error("Error during fulfillment:", error);
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
