import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > span {
    display: flex;
    align-items: center;
  }

  & > input {
    padding-left: 0;
  }
`;
