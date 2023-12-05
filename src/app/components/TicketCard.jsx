"use client";
import React from "react";

import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function TicketCard() {
  const dispatch = useContext(BasketUpdaterContext);
  return (
    <article className="ticketCard">
      <h3>FOOFEST 24</h3>
      <h2>V.I.P TICKET</h2>
      <h1>1299,-</h1>
      <button onClick={() => dispatch((o) => o.concat({ ticket: "VIP", price: 1299 }))}>Læg i kurv</button>
    </article>
  );
}

export default TicketCard;
