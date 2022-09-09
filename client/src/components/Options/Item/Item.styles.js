import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > label {
    display: flex;
    flex-direction: column;

    & > span {
      opacity: 0.6;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 12rem;

    & > span {
      cursor: text;
    }
  }
`;

export const StyledButton = styled.button`
  border: 1px solid var(--main-color);
  width: 4rem;
  height: 4rem;
  text-align: center;
  cursor: ${({ disabledDecrement, disabledIncrement }) =>
    disabledDecrement || disabledIncrement ? "not-allowed" : "pointer"};
  opacity: ${({ disabledDecrement, disabledIncrement }) =>
    disabledDecrement || disabledIncrement ? "0.3" : "1"};
`;
