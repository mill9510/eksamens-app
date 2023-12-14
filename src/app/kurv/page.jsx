"use client";
import { useContext } from "react";
import { BasketUpdaterContext, BasketValueContext } from "../contexts/basketContext";
import Button from "../components/Button";

import styles from "../page.module.css";
import Link from "next/link";

export default function Kurv() {
  const dispatch = useContext(BasketUpdaterContext);
  const state = useContext(BasketValueContext);

  return (
    <main className={styles.main}>
      <h1>Kurv</h1>
      <ul>
        {state.map((item) => {
          return (
            <li key={id}>
              <h2>
                {item.ticket} <span>{item.price}</span>
              </h2>
              <h4>
                {item.tent} {item.tentPrice}
              </h4>
            </li>
          );
        })}
      </ul>
      <Link href="/form">
        <button>KØB</button>
      </Link>
    </main>
  );
}
