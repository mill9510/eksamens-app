"use client";
import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function TicketCard(props) {
  const dispatch = useContext(BasketUpdaterContext);
  return (
    <div className="ticketCard">
      <h3>FOOFEST 24</h3>
      <h2>REGULAR</h2>
      <h1>1299,-</h1>
      <Link href="/TicketDetails">
        <button>{props.buttontext}</button>
      </Link>
    </div>
  );
}

export default TicketCard;
