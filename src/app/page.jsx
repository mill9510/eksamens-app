import styles from "./page.module.css";

import React from "react";

import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Forside titel="FOOFEST" />
      <Button text="Tickets" />
    </main>
  );
}
