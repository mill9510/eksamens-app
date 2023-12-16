"use client";
import React from "react";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
function TicketCardRegular(props) {
  const dispatch = useContext(BasketUpdaterContext);

  return (
    <div className="ticketCard">
      <h3>FOOFEST 24</h3>
      <h2>REGULAR</h2>
      <h1>799,-</h1>
      <Link href="/TicketDetailsReg">
        <button onClick={() => dispatch((o) => o.concat({ id: uuidv4(), ticket: "Regular", tentPrice: 799 }))}>Læg i kurv</button>
      </Link>
    </div>
  );
}

export default TicketCardRegular;
