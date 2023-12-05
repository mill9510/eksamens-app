import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Forside />
    </main>
  );
}
