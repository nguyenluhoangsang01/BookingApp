import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;

  & > div {
    padding: 2rem;
    height: calc(100vh - 154px);
  }

  & > div:first-child {
    flex: 1;
    border-right: 1px solid var(--main-color);
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  & > div:last-child {
    flex: 5;
  }
`;
