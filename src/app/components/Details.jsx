"use client";
import React, { useState, useEffect } from "react";
import styles from "../components/details.css";
import { useContext } from "react";
import { BasketUpdaterContext, BasketValueContext } from "../contexts/basketContext";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

//EN MASSE FUCKING HJÆLP FRA NETTET, HVORFOR SKAL REQUESTES VÆRE SÅDAN DER??

export default function Details() {
  const dispatch = useContext(BasketUpdaterContext);
  const basket = useContext(BasketValueContext);
  const [selectedArea, setSelectedArea] = useState(null);
  const router = useRouter();

  const [reserveData, setReserveData] = useState({
    area: "",
    amount: 0,
  });

  const [areas, setAreas] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://pollen-flawless-aerosteon.glitch.me/available-spots");
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
      const response = await fetch("http://pollen-flawless-aerosteon.glitch.me/reserve-spot", {
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
      const fulfillResponse = await fetch("http://pollen-flawless-aerosteon.glitch.me/fullfill-reservation", {
        method: "POST",
        body: JSON.stringify({ id: reservationId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (fulfillResponse.ok) {
        console.log("Reservation fulfilled");
        router.push("/kurv");
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
                <input className="areabtn" type="radio" name="area" value={area} onChange={() => setSelectedArea(area)} /> {area}
              </label>
            </article>
          </div>
        ))}
      </div>

      <div className="amount">
        <label>Amount: </label>
        <input type="number" name="amount" value={reserveData.amount} onChange={handleInputChange} />
        <button onClick={handleReservePut}>Reserve Spot</button>
      </div>

      <div className="spotdetails">
        <div className="tentgrid">
          <div className="tent1">
            <p>2 person tent </p>
            <button onClick={() => dispatch((o) => o.concat({ tent: "2 person", tentPrice: 299 }))}>Læg i kurv</button>
          </div>
          <div className="tent2">
            <p>3 person tent </p>
            <button onClick={() => dispatch((o) => o.concat({ tent: "3 person", tentPrice: 399 }))}>Læg i kurv</button>
          </div>
          <div className="detailsBasket">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
            </svg>
            <span className="basketcount">{basket.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
