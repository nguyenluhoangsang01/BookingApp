import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: var(--font-sm);
  color: var(--main-color);
  transition: var(--transition);
  height: 3rem;

  &:hover {
    color: var(--second-color);
  }
`;
