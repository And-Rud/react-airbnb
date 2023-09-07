import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Add({ title, ...rest }) {
  return (
    <Box className="property" shadow>
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <ul className="property__list">
      <ListItem title={"Правила дому"}>
        <p>{house_rules}</p>
      </ListItem>
      <ListItem title={"Політика скасування"}>
        <p>{cancellation_policy}</p>
      </ListItem>
      <ListItem title={"Місцевий транспорт"}>
        <p>{local_transportation}</p>
      </ListItem>
      <ListItem title={"Мови хоста"}>
        <p>{host_languages}</p>
      </ListItem>
      <ListItem title={"Спеціальні пропозиції:"}>
        <p>{special_offers}</p>
      </ListItem>
      <ListItem title={"Інструкції щодо реєстрації"}>
        <p>{checkin_instructions}</p>
      </ListItem>
    </ul>
  );
}
