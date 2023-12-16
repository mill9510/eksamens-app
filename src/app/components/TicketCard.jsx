"use client";
import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function TicketCard(props) {
  const dispatch = useContext(BasketUpdaterContext);
  return (
    <div className="ticketCard">
      <h3 className="tickettitel">{props.tickettitel}</h3>
      <h2 className="ticketname">{props.ticketname}</h2>
      <h1 className="ticketprice">{props.ticketprice}</h1>
    </div>
  );
}

export default TicketCard;
