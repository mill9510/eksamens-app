"use client";
import "../tickets/page.css";
import { useContext } from "react";
import React from "react";
import Forsidetickets from "../components/Forsidetickets";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import TicketCard from "../components/TicketCard";
import TicketCardRegular from "../components/TicketCardRegular";
import { BasketContext, BasketValueContext } from "../contexts/basketContext";

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
      />
      <div className="ticketGrid">
        <div className="card1">
          <TicketCard />
        </div>
        <div className="card2">
          <TicketCardRegular />
        </div>
      </div>
    </>
  );
}

export default Tickets;
