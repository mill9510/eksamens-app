"use client";
import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";
import "../components/TicketCard.css";

function TicketCard(props) {
  const dispatch = useContext(BasketUpdaterContext);
  return (
    <div className="ticketCard">
      <h3 className="tickettitel">FOOFEST 24</h3>
      <h2 className="ticketname">V.I.P Ticket</h2>
      <h1 className="ticketprice">1299,-</h1>
      <Link href="/TicketDetails">
        <Button text="Buy now" onClick={() => dispatch((o) => o.concat({ id: uuidv4(), ticket: "Regular", tentPrice: 1299 }))}></Button>
      </Link>
    </div>
  );
}

export default TicketCard;
