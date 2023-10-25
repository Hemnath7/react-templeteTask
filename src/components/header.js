import logo from "../assets/logo.png";
import "../components/header.css";

function Header() {
  return (
    <div className="hContainer">
      <img src={logo}></img>
      <div>
        <a className="navLink">Home</a>
        <a className="navLink">About</a>
        <a className="navLink">What we do</a>
        <a className="navLink">Portfolio</a>
        <a className="navLink">Contact Us</a>
      </div>
      <>
        <a className="navLink">Login</a>
      </>
    </div>
  );
}

export default Header;
