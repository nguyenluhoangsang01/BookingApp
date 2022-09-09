import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: var(--main-color);
  padding: 4rem;
`;

export const Container = styled.div`
  color: var(--txt-white);
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: var(--font-2xl);
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  opacity: 0.8;
  margin-bottom: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: calc(var(--max-width) / 2);
  height: 5rem;
  border-radius: var(--border-radius);
  overflow: hidden;

  & > input {
    height: 100%;
  }

  & > button {
    height: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
