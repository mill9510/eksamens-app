import Link from "next/link";
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
                <Link href="/">Home</Link>
              </li>
              <li className="navitem">
                <Link href="/tickets">Tickets</Link>
              </li>
              <li className="navitem">
                <Link href="/overview">Area overview</Link>
              </li>
              <li className="navitem">
                <Link href="/program">Program</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}

export default Navbar;
