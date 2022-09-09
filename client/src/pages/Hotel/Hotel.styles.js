import styled from "styled-components";

export const Wrapper = styled.section`
  & > svg {
    cursor: pointer;
    z-index: 9999;
    font-size: var(--font-8xl);
    position: fixed;
    color: var(--main-color);
    background-color: var(--bgc-white);
    padding: 1rem;
    border-radius: 50%;
    user-select: none;
  }

  & > .leftArrow {
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  & > .rightArrow {
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }

  & > .close {
    top: 7%;
    right: 12%;
  }
`;

export const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  & > img {
    width: var(--max-width);
    height: 80vh;
    border-radius: var(--border-radius);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  position: relative;

  & > button {
    position: absolute;
    top: 3.6rem;
    right: 0;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: var(--font-2xl);
`;
export const Address = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-sm);

  & > svg {
    color: var(--main-color);
  }
`;
export const Distance = styled.p`
  font-weight: 500;
  color: var(--main-color);
`;
export const PriceHighlight = styled.p`
  font-weight: 500;
  color: #008009;
`;
export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  border-radius: var(--border-radius);
  overflow: hidden;

  & > img {
    width: 100%;
    height: 25rem;
    cursor: pointer;
  }
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 1rem;
`;
export const Texts = styled.div`
  flex: 3;
`;
export const DetailsTitle = styled.h3`
  font-weight: 600;
  font-size: var(--font-2xl);
`;
export const DetailsDescription = styled.p`
  text-align: justify;
  font-size: var(--font-sm);
  margin-top: 2rem;
`;
export const Price = styled.div`
  flex: 1;
  background-color: var(--main-color);
  color: var(--txt-white);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > h3 {
    font-size: var(--font-lg);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: var(--font-sm);
    text-align: justify;
  }

  & > span {
    font-weight: 500;
    text-align: end;
  }
`;
