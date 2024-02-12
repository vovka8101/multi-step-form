import styled from "styled-components"
import bgImg from "/images/bg-sidebar-desktop.svg"
import bgImgMobile from "/images/bg-sidebar-mobile.svg"

export const StyledSteps = styled.aside`
  min-width: 220px;
  flex-basis: 30%;
  padding: 38px 32px;
  color: white;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (orientation: portrait) {
    width: 100vw;
    min-height: 172px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-image: url(${bgImgMobile});
    z-index: -1;
  }
`

export const StyledStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 29px;
  
  @media (orientation: portrait) {
    margin-bottom: 0;
  }
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

  @media (orientation: portrait) {
    display: none;
  }
`

export const StepTitle = styled.h2`
  color: #fafbff;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (orientation: portrait) {
    display: none;
  }
`