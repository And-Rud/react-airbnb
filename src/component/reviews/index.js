import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import "./index.css";

export default function Reviews({ rev }) {
  return (
    <div className="rev__block">
      <Heading>Відгуки клієнтів</Heading>
      <div className="rev__list">
        {rev.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="box">
      <div className="rev">
        <span className="rev__name">{guestName}</span>
        <span className="rev__rat">Рейтинг: {rating}</span>
      </div>
      <p className="rev__des">{review}</p>
    </Box>
  );
}
