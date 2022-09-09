import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--txt-black);
  background-color: var(--bgc-white);
  border: 4px solid #febb02;
  border-radius: var(--border-radius);
  height: 5rem;
  position: absolute;
  bottom: calc(-2.5rem + 2px);
  width: 100%;
  max-width: var(--max-width);
  display: grid;
  grid-template-columns: 1fr 27rem 30rem 9rem;
  user-select: none;
  font-size: var(--font-sm);

  & > div:not(:last-child) {
    border-right: 4px solid #febb02;
    display: flex;
    justify-content: center;
  }

  & > div:first-child {
    padding-left: 2rem;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    cursor: pointer;
  }

  & svg {
    opacity: 0.4;
  }

  .dateRange {
    position: absolute;
    border: 4px solid #febb02;
    z-index: 1;
    top: calc(100% + 8px);
    left: 40%;
  }
`;
