import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { MdOutlinePeople } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCounterOptions } from "../../app/slices/counterOptionsSlice";
import Button from "../Button";
import Input from "../Input";
import Options from "../Options";
import Item from "./Item";
import { Wrapper } from "./Search.styles";

const Search = () => {
  // State
  const [toggleDate, setToggleDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [toggleOptions, setToggleOptions] = useState(false);
  const [destination, setDestination] = useState("");
  // Ref
  const innerRef = useRef(null);
  // Redux
  const { adult, children, room } = useSelector(selectCounterOptions);
  // Router
  const navigate = useNavigate();
  // Handle actions
  const handleSearch = () => {
    window.scrollTo(0, 0);
    destination
      ? navigate("/hotels", {
          state: {
            destination,
            date,
          },
        })
      : (innerRef.current.placeholder =
          "Please enter the destination you want to search for!") &&
        innerRef.current.focus();
  };
  // Handle async actions
  useEffect(() => {
    const hidePopup = (e) => {
      if (e.keyCode === 27) {
        toggleDate && setToggleDate(false);
        toggleOptions && setToggleOptions(false);
      }
    };

    document.addEventListener("keydown", hidePopup);

    return () => document.removeEventListener("keydown", hidePopup);
  }, [toggleDate, toggleOptions]);

  return (
    <Wrapper>
      <Item icon={<BiBed />}>
        <Input
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          innerRef={innerRef}
        />
      </Item>

      <Item
        icon={<AiOutlineCalendar />}
        onClick={() => setToggleDate((prevState) => !prevState)}
      >
        <span>
          {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
      </Item>
      {toggleDate && (
        <DateRange
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          minDate={new Date()}
          className="dateRange"
        />
      )}
      <Item
        icon={<MdOutlinePeople />}
        onClick={() => setToggleOptions((prevState) => !prevState)}
      >
        <p>
          {adult} adult{adult > 1 && "s"} - {children} children - {room} room
          {room > 1 && "s"}
        </p>
      </Item>
      {toggleOptions && <Options className="options" />}

      <Button primary onClick={handleSearch}>
        Search
      </Button>
    </Wrapper>
  );
};

export default Search;
