import React from "react";
import TicketSingle from "../components/TicketSingle";
import Details from "../components/Details";
import styles from "../TicketDetails/ticketDetails.css";
import Forsidetickets from "../components/Forsidetickets";

function page() {
  return (
    <>
      <Forsidetickets titel="Ticket Details" ptext="*YOU WILL HAVE THE OPTION TO ADD GREEN CAMPING TO YOUR PURCHASE  DURING CHECKOUT" />
      <div className="gridContainer">
        <TicketSingle tickettitel="Foofest ´24" ticketname="V.I.P Ticket" ticketprice="1299,-" buttontext="Læg i kurv" />
        <Details />
      </div>
    </>
  );
}

export default page;
