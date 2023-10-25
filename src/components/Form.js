import "../App.css";
import ButtonDark from "./ButtonDark";

function Form() {
  return (
    <div className="form">
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Phone Number"></input>
      <input type="text" placeholder="Email"></input>
      <textarea placeholder="Message"></textarea>

      <ButtonDark />
    </div>
  );
}

export default Form;
