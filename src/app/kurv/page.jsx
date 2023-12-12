"use client";
import { useContext } from "react";
import { BasketUpdaterContext, BasketValueContext } from "../contexts/basketContext";

import styles from "../page.module.css";

export default function Kurv() {
  const dispatch = useContext(BasketUpdaterContext);
  const state = useContext(BasketValueContext);

  return (
    <main className={styles.main}>
      <h1>Kurv</h1>
      <ul>
        {state.map((item) => {
          return (
            <li>
              {item.ticket}, {item.price},-
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch((old) => old.concat({ title: "T-Shirt", price: 350 }))}>Læg i kurv</button>
    </main>
  );
}
