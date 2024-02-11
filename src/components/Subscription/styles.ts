import styled from "styled-components";

export const SubscriptionStyled = styled.div`
  min-height: 568px;
  display: flex;
  gap: 1em;

  @media (orientation: portrait) {
    min-height: auto;
    flex-direction: column;
  }
`