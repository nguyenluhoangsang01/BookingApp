import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-sm);
`;
export const Title = styled.h3``;
export const Description = styled.p``;
export const MaxPeople = styled.p``;
export const Price = styled.p``;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & span {
    font-weight: 500;
    margin-right: 1rem;
  }
`;
export const Room = styled.div`
  display: flex;
  gap: 3rem;
`;
export const RoomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  & > label {
    font-size: var(--font-xs);
    letter-spacing: 0.1rem;
  }

  & > input {
    all: revert;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
