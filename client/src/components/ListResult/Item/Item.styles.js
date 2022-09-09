import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  border: 1px solid var(--third-color);
  padding: 0.5rem;
  border-radius: var(--border-radius);
`;

export const StyledImg = styled.img`
  width: 30%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Title = styled.h4`
  font-weight: 600;
  font-size: var(--font-xl);
  color: var(--main-color);
`;
export const Distance = styled.p`
  font-size: var(--font-xs);
`;
export const TaxiOp = styled.p`
  font-size: var(--font-xs);
  background-color: #008009;
  color: var(--txt-white);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  width: max-content;
`;
export const Subtitle = styled.p`
  font-size: var(--font-xs);
  font-weight: 600;
`;
export const Features = styled.p`
  font-size: var(--font-xs);
`;
export const CancelOp = styled.p`
  font-size: var(--font-xs);
  color: #008009;
  font-weight: 600;
`;
export const CancelOpSubtitle = styled.p`
  font-size: var(--font-xs);
  color: #008009;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
`;
export const Score = styled.span`
  color: var(--txt-white);
  background-color: var(--main-color);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  width: 3rem;
  height: 3rem;
  text-align: center;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Price = styled.span`
  font-weight: 500;
  font-size: var(--font-lg);
`;
export const Tax = styled.span`
  font-size: var(--font-xs);
  opacity: 0.7;
  margin-bottom: 1rem;
`;
