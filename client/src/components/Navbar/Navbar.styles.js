import styled from "styled-components";

export const Wrapper = styled.nav`
  height: var(--navbar-height);
  background-color: var(--main-color);
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--txt-white);

  & > p {
    text-transform: uppercase;
    font-weight: 500;
  }
`;
export const Logo = styled.h1`
  font-weight: 700;
  font-size: var(--font-2xl);
`;
export const Items = styled.div`
  display: flex;
  gap: 1.5rem;
`;
