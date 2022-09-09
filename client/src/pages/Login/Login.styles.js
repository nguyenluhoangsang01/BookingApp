import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  padding: 2rem;
  width: 40rem;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: var(--border-radius);
  color: var(--txt-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div {
    & > label {
      font-size: var(--font-sm);
      margin-bottom: 0.5rem;
      display: inline-block;
    }
  }

  & > div {
    & + div {
      margin-top: 1.5rem;
    }
  }

  & > button {
    margin-top: 3.5rem;
  }
`;
