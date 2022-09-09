import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;

  & > div {
    & > h4 {
      font-weight: 600;
    }

    & > p {
      opacity: 0.7;
      font-size: var(--font-sm);
    }
  }
`;
