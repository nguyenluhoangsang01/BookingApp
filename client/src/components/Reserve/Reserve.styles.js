import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: var(--bgc-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  position: relative;
  min-width: 44rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    border-top: 1px solid var(--main-color);
    padding-top: 1rem;
  }

  & > span {
    margin-bottom: 0.5rem;
    display: inline-block;
    font-weight: 600;
  }

  & > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: var(--transition);
    font-size: var(--font-2xl);

    &:hover {
      color: var(--main-color);
    }
  }

  & > button {
    margin-top: 1rem;
  }
`;
