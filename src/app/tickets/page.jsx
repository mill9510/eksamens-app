"use client";
import "../tickets/page.css";
import { useContext } from "react";
import React from "react";
import Forside from "../components/Forside";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import TicketCard from "../components/TicketCard";
import TicketCardRegular from "../components/TicketCardRegular";
import { BasketContext, BasketValueContext } from "../contexts/basketContext";

function Tickets() {
  return (
    <>
      <div className="ticketGrid">
        <div className="card1">
          <TicketCard buttontext="BUY TICKET" />
        </div>
        <div className="card2">
          <TicketCardRegular />
        </div>
      </div>
    </>
  );
}

export default Tickets;
