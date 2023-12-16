"use client";
import { useContext } from "react";
import { BasketUpdaterContext, BasketValueContext } from "../contexts/basketContext";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

import "../kurv/kurv.css";
import Link from "next/link";

export default function Kurv() {
  const dispatch = useContext(BasketUpdaterContext);
  const basket = useContext(BasketValueContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    calculateTotal();
  }, [basket]);

  function calculateTotal() {
    let totalPrice = 0;

    basket.forEach((item) => {
      totalPrice += item.tentPrice;
    });
    console.log("totalprice", totalPrice, basket);

    setTotal(totalPrice + 90);
  }

  return (
    <main className="kurvContainer">
      <h1>Kurv</h1>
      <ul>
        {basket.map((item) => {
          return (
            <li key={item.id}>
              <h2>
                {item.ticket} <span>{item.tentPrice}</span>
              </h2>
              <h4>Tent: {item.tent}</h4>
            </li>
          );
        })}
      </ul>
      <h4>Fixed booking fee: 90</h4>
      <span>Total Price: {total}</span>
      <Link href="/form">
        <button>KØB</button>
      </Link>
    </main>
  );
}
