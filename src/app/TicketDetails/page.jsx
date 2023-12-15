import React from "react";
import TicketCard from "../components/TicketCard";
import Details from "../components/Details";
import styles from "../TicketDetails/ticketDetails.css";

function page() {
  return (
    <div className="gridContainer">
      <TicketCard buttontext="Læg i kurv" />
      <Details />
    </div>
  );
}

export default page;
