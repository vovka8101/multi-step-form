import styled from "styled-components"

export const SummaryContent = styled.div`
  padding: 20px 0;
  background-color: #f0f6ff;
  border-radius: 8px;
  margin-bottom: 28px;
`

const Rows = styled.div`
  padding-inline: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (orientation: portrait) {
    padding-inline: 16px;
  }
`

export const PlanRow = styled(Rows)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #d6d9e6;

  @media (orientation: portrait) {
    padding-bottom: 12px;
  }
`

export const ChangePlanLink = styled.span`
  color: #9699ab;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #473dff;
    font-weight: 700;
  }
`

export const PlanPrice = styled.p`
  color: #02295a;
  font-weight: 700;

  @media (orientation: portrait) {
    font-size: 14px;
  }
`

export const AddonRow = styled(Rows)`
  padding-top: 20px;
  font-size: 14px;
  font-weight: 500;
`

export const AddonName = styled.p`
  color: #9699ab;
`

export const AddonPrice = styled.p`
  color: #02295a;
`

export const TotalPriceContainer = styled(Rows)`
  color: #9699ab;
  font-size: 14px;
`

export const TotalPrice = styled.p`
  color: #473dff;
  font-size: 20px;
  font-weight: 700;

  @media (orientation: portrait) {
    font-size: 1rem;
  }
`