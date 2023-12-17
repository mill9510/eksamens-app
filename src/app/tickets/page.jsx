"use client";
import "../tickets/page.css";
import { useContext } from "react";
import React from "react";
import Forsidetickets from "../components/Forsidetickets";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import TicketCard from "../components/TicketCard";
import TicketCardRegular from "../components/TicketSingle";
import { BasketContext, BasketValueContext } from "../contexts/basketContext";
import Link from "next/link";

function Tickets() {
  return (
    <>
      <Forsidetickets
        titel="Tickets"
        text="IF YOU WANT THE FULL FESTIVAL EXPERIENCE 
        WE RECOMMEND YOU CAMP OUT 
        AT ONE OF OUR BEAUTIFUL CAMP AREAS.
        
        YOU WILL HAVE THE OPPORTUNITY TO CHOOSE
        WHICH AREA WHEN ORDERING YOUR TICKET. "
        ptext="JULY 22. - JULY 28."
      />

      <div className="ticketGrid">
        <div className="card1">
          <TicketCard tickettitel="Foofest ´24" ticketname="V.I.P Ticket" ticketprice="1299,-" />
          <Link href="/TicketDetails">
            <Button text="Buy now" onClick={() => dispatch((o) => o.concat({ id: uuidv4(), ticket: "Regular", tentPrice: 799 }))}></Button>
          </Link>
        </div>
        <div className="card2">
          <TicketCard tickettitel="Foofest ´24" ticketname="Regular ticket" ticketprice="799,-" />
          <Link href="/TicketDetailsReg">
            <Button text="Buy now" onClick={() => dispatch((o) => o.concat({ id: uuidv4(), ticket: "Regular", tentPrice: 799 }))}></Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Tickets;
