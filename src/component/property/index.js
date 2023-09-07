import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Property({ title, ...rest }) {
  return (
    <Box className="property" shadow>
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property__list">
      <ListItem imageSrc="./svg/people.svg">
        <span>{guests} гості</span>
      </ListItem>
      <ListItem imageSrc="./svg/badroom.svg">
        <span>{bedrooms} спальня</span>
      </ListItem>
      <ListItem imageSrc="./svg/bad.svg">
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc="./svg/shower.svg">
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
