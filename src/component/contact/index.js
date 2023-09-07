import "./index.css";
import ava from "./avatar.svg";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="container">
      <div className="contact">
        <img src={ava} alt="Avatar" />
        <div className="contact__title">
          <h1 className="contact__text">Господар - {name}</h1>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">{response_rate}</span>
          </div>
        </div>
      </div>
      <p>{info}</p>
    </div>
  );
}
