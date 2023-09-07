import "./index.css";

export default function Foto({ src, name }) {
  return <img src={src} alt={name} className="foto" />;
}
