import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1;
  padding: 2rem;
  width: 100%;
  max-width: 34rem;
  background-color: var(--bgc-white);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.5rem;

  &.options {
    position: absolute;
    border: 4px solid #febb02;
    z-index: 1;
    top: calc(100% + 3px);
    left: 75%;
  }
`;
