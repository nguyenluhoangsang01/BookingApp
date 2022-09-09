import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1.365;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--third-color);
  user-select: none;
  height: 100%;

  & > button {
    margin-top: 2.5rem;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: var(--font-lg);
  margin-bottom: 1rem;
`;
