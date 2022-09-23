import React from "react";
import {
  Container,
  Description,
  Info,
  MaxPeople,
  Price,
  Room,
  RoomItem,
  Title,
  Wrapper,
} from "./Item.styles";

const Item = ({ room, isAvailable, handleSelect }) => {
  return (
    <Wrapper>
      <Container>
        <Info>
          <Title>
            <span>Title:</span> {room.title}
          </Title>
          <Description>
            <span>Description:</span> {room.description}
          </Description>
          <MaxPeople>
            <span>Max people:</span> {room.maxPeople}
          </MaxPeople>
          <Price>
            <span>Price:</span> {room.price}
          </Price>
        </Info>

        <Room>
          {room.roomNumbers.length > 0 &&
            room.roomNumbers.map((roomNumber, idx) => (
              <RoomItem key={idx}>
                <label htmlFor={roomNumber._id}>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  id={roomNumber._id}
                  value={roomNumber._id}
                  name={roomNumber._id}
                  onChange={handleSelect}
                  disabled={isAvailable(roomNumber.unavailableDates)}
                />
              </RoomItem>
            ))}
        </Room>
      </Container>
    </Wrapper>
  );
};

export default Item;
