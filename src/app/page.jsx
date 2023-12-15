import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import Button from "./components/Button";
import React from "react";
import Galleri from "./components/Galleri";

export default function Home() {
  return (
    <main className={styles.main}>
      <Forside
        titel="FOOFEST"
        text="FOOFEST IS ALL ABOUT SHARING SPECIAL 
        MOMENTS WITH OLD FRIENDS, NEW FRIENDS, 
        WEIRD FRIENDS AND FUN FRIENDS."
      />

      <Galleri />
    </main>
  );
}
