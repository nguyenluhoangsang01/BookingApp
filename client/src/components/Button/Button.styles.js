import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 1rem 1.5rem;
  color: ${({ primary }) =>
    primary ? "var(--txt-white)" : "var(--main-color)"};
  background-color: ${({ primary }) =>
    primary ? "var(--main-color)" : "var(--txt-white)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-size: var(--font-sm);
  font-weight: 500;
  text-align: center;
  width: ${({ width }) => width === "full" && "100%"};
  opacity: ${({ disabled }) => disabled && "0.5"};

  &:hover {
    transform: ${({ disabled }) => !disabled && "scale(1.05)"};
  }

  &:active {
    transform: ${({ disabled }) => !disabled && "scale(1)"};
  }
`;
