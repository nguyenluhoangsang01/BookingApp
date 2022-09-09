import styled from "styled-components";

export const Wrapper = styled.header`
  color: var(--txt-white);
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin-bottom: ${({ isHome }) => (isHome ? "9rem" : 0)};
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: var(--font-8xl);
`;
export const Description = styled.p`
  font-size: var(--font-xl);
`;
