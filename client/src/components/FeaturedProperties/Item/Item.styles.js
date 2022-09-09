import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  overflow: hidden;
  cursor: pointer;
  font-size: var(--font-sm);

  & > div {
    & > h4,
    & > h5 {
      opacity: 0.7;
    }

    & > p {
      margin: 1rem 0 0.5rem;
      font-weight: 600;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      & > p {
        color: var(--txt-white);
        background-color: var(--main-color);
        padding: 0.5rem;
        border-radius: var(--border-radius);
        border-bottom-left-radius: 0;
        width: 3rem;
        height: 3rem;
        text-align: center;
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        & > p {
          font-size: var(--font-xs);
          opacity: 0.7;
        }
      }
    }
  }
`;
