import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import React from "react";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Forside />
      <Footer />
    </main>
  );
}
