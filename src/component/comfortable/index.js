import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import "./index.css";

export default function Comfortable({ title, ...rest }) {
  return (
    <Box className="comfortable" shadow>
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="comfortable__list">
      {hasPool && (
        <ListItem imageSrc="./svg/pool.svg">
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc="./svg/sport.svg">
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc="./svg/breakfast.svg">
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc="./svg/wifi.svg">
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc="./svg/car.svg">
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc="./svg/pets.svg">
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc="./svg/air_transfer.svg">
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc="./svg/consierge.svg">
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc="./svg/service_room.svg">
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc="./svg/child.svg">
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}
