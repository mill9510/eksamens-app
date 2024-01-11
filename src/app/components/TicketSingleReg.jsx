"use client";
import React from "react";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import "../components/TicketCard.css";

function TicketCardRegular(props) {
  const dispatch = useContext(BasketUpdaterContext);

  return (
    <div className="ticketCard">
      <h3 className="tickettitel">{props.tickettitel}</h3>
      <h2 className="ticketname">{props.ticketname}</h2>
      <h1 className="ticketprice">{props.ticketprice}</h1>
      <button className="basketbtn" onClick={() => dispatch((o) => o.concat({ id: uuidv4(), ticket: "Regular", tentPrice: 799 }))}>
        Læg i kurv
      </button>
    </div>
  );
}

export default TicketCardRegular;
