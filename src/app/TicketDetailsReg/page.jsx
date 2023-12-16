"use client";
import React from "react";
import TicketCard from "../components/TicketCard";
import Details from "../components/Details";
import styles from "../TicketDetails/ticketDetails.css";
import TicketCardRegular from "../components/TicketSingle";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";
import Forsidetickets from "../components/Forsidetickets";
import TicketSingle from "../components/TicketSingle";

function page() {
  //const dispatch = useContext(BasketUpdaterContext);
  return (
    <>
      <Forsidetickets titel="Ticket Details" ptext="*YOU WILL HAVE THE OPTION TO ADD GREEN CAMPING TO YOUR PURCHASE  DURING CHECKOUT" />
      <div className="gridContainer">
        <TicketSingle tickettitel="Foofest ´24" ticketname="Regular Ticket" ticketprice="799,-" buttontext="Læg i kurv" />
        <Details />
      </div>
    </>
  );
}

export default page;
