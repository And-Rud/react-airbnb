import { Fragment } from "react";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Attract({ att }) {
  return (
    <Box className="att" shadow>
      <Heading border>Пам'ятки поблизу</Heading>
      <ul className="att__list">
        {att.map(({ ...rest }) => (
          <List {...rest} />
        ))}
      </ul>
    </Box>
  );
}

function List({ name, link }) {
  return (
    <ListItem>
      <a className="att__item" href={link}>
        {name}
      </a>
    </ListItem>
  );
}
