import Navbar from "./components/Navbar";
import Forside from "./components/Forside";
import Button from "./components/Button";
import React from "react";
import Galleri from "./components/Galleri";

export default function Home() {
  return (
    <main>
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
