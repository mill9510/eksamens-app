"use client";
import React from "react";
import TicketCard from "../components/TicketCard";
import Details from "../components/Details";
import styles from "../TicketDetails/ticketDetails.css";
import TicketCardRegular from "../components/TicketCardRegular";
import { useContext } from "react";
import { BasketUpdaterContext } from "../contexts/basketContext";

function page() {
  //const dispatch = useContext(BasketUpdaterContext);
  return (
    <div className="gridContainer">
      <TicketCardRegular buttontext="Læg i kurv" />
      <Details />
    </div>
  );
}

export default page;
