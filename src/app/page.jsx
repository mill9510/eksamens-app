import styles from "./page.module.css";

import React from "react";

import Navbar from "./components/Navbar";
import Forside from "./components/Forside";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Forside />
    </main>
  );
}
