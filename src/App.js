import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/card";
import PortfolioCard from "./components/portfolioCard";
import ButtonDark from "./components/ButtonDark";
import Usp from "./components/Usp";
import Form from "./components/Form";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <h1 className="heading">What we do</h1>
        <div id="cardRow">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div id="aboutUs" className="container">
        <h1 className="heading">About Us</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
      </div>
      <div className="container">
        <h1 className="heading">What we do</h1>
        <div id="pGrid">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <ButtonDark />
      </div>
      <div className="container greyBg">
        <h1 className="heading white">Why Chose us</h1>
        <div id="cardRow">
          <Usp />
          <Usp />
          <Usp />
        </div>
      </div>
      <div className="container col-2">
        <div>
          <h1 className="heading">Why Chose us</h1>
          <Form />
        </div>
        <div>
          <h1 className="heading">What Clients Says</h1>
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default App;
