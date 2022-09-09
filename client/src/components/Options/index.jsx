import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAdult,
  decrementChildren,
  decrementRoom,
  incrementAdult,
  incrementChildren,
  incrementRoom,
  selectCounterOptions,
} from "../../app/slices/counterOptionsSlice";
import Item from "./Item";
import { Wrapper } from "./Options.styles";

const Options = ({ className }) => {
  // Redux
  const dispatch = useDispatch();
  const { adult, children, room } = useSelector(selectCounterOptions);

  return (
    <Wrapper className={className}>
      <Item
        label="Adult"
        value={adult}
        handleDecrement={() => dispatch(decrementAdult(adult))}
        handleIncrement={() => dispatch(incrementAdult(adult))}
        disabledDecrement={adult <= 0}
      />
      <Item
        label="Children"
        subLabel="Ages 0 - 17"
        value={children}
        handleDecrement={() => dispatch(decrementChildren())}
        handleIncrement={() => dispatch(incrementChildren(adult))}
        disabledDecrement={children <= 0}
        disabledIncrement={adult <= 0}
      />
      <Item
        label="Room"
        value={room}
        handleDecrement={() => dispatch(decrementRoom())}
        handleIncrement={() => dispatch(incrementRoom(adult))}
        disabledDecrement={room <= 0 || (room === 1 && adult > 0)}
        disabledIncrement={adult <= 0}
      />
    </Wrapper>
  );
};

export default Options;
