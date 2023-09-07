import "./index.css";

export default function Title({ ...n }) {
  return (
    <div className="title">
      <h1 className="title__text">{n.title}</h1>
      <div className="title__sub-block">
        <span className="title__sub-value">{n.rating} рейтинг</span>
        <span className="title__sub-value">{n.rewiev} відгуків</span>
        <span className="title__sub-value">
          {n.city}, {n.country}{" "}
        </span>
        {n.superhost && <span className="title__sub-value">Супер-хост</span>}
      </div>
    </div>
  );
}
