import Heading from "../heading";
import "./index.css";

export default function Description({ title, description }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{description}</p>
    </div>
  );
}
