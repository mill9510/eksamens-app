import "./Navbar.css";
import Image from "next/image";

function Navbar() {
  return (
    <main>
      <header className="header">
        <div className="headercontent">
          <a href="#" className="logo">
            <Image src="./imgs/circle.svg" alt="logo" width={200} height={200} className="logoimg" />
          </a>
          <nav className="nav">
            <ul className="navlist">
              <li className="navitem">
                <a href="#" className="navlink">
                  Lineup
                </a>
              </li>
              <li className="navitem">
                <a href="#" className="navlink">
                  Tickets
                </a>
              </li>
              <li className="navitem">
                <a href="#" className="navlink">
                  Area Overview
                </a>
              </li>
              <li className="navitem">
                <a href="#" className="navlink">
                  Program
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}

export default Navbar;
