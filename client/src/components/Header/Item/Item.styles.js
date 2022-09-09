import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  ${"" /* Active */}
  ${
    "" /* border: 1px solid var(--bgc-white);
  border-radius: var(--border-radius);
  background: rgb(255 255 255 / 20%); */
  }

  & > span {
    display: flex;
    align-items: center;
  }
`;
