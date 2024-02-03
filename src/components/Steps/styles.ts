import styled from "styled-components"
import bgImg from "../../assets/images/bg-sidebar-desktop.svg"

export const StyledSteps = styled.aside`
  flex-basis: 30%;
  padding: 38px 32px;
  color: white;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 29px;
`

export const StyledStepNumber = styled.div<{ $isStepActive?: boolean }>`
  width: 33px;
  height: 33px;
  padding: 7px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.$isStepActive ? "black" : "inherit"};
  background-color: ${props => props.$isStepActive ? "#bfe2fd" : "transparent"};
  border-radius: 50%;
  border: ${props => props.$isStepActive ? "1px solid transparent" : "1px solid white"};
`

export const StepNumberText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #adbeff;
  text-transform: uppercase;
`

export const StepTitle = styled.h2`
  color: #fafbff;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`