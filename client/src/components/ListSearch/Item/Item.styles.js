import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  cursor: pointer;

  & > label {
    font-size: var(--font-xs);
  }

  & > p {
    background-color: var(--bgc-white);
    padding: 1rem;
    font-size: var(--font-sm);
  }
`;

export const Wrapper2 = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  cursor: pointer;

  & > label {
    font-size: var(--font-xs);
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > span {
      font-size: var(--font-xs);
    }

    & > p {
      font-size: var(--font-sm);
      background-color: var(--bgc-white);
      padding: 1rem;
      width: 100%;
    }
  }
`;
