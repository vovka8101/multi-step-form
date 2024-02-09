import styled from "styled-components"

export const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const PlanStyled = styled.label<{ $isSelected?: boolean }>`
  flex-basis: 30%;
  padding: 20px 16px;
  background-color: ${props => props.$isSelected ? "#fafbff" : "none"};
  border: ${props => props.$isSelected ? "1px solid #02295a" : "1px solid #d6d9e6"};
  border-radius: 8px;
  cursor: ${props => props.$isSelected ? "default" : "pointer"};
  user-select: none;
  transition: border 0.2s;

  &:hover {
    border: 1px solid #02295a;
  }
`

export const PlanInput = styled.input`
  display: none;
`

export const PlanImg = styled.img`
  margin-bottom: 42px;
`

export const PlanTitle = styled.h4`
  color: #02295a;
  font-weight: 700;
  margin-bottom: 8px;
`

export const PlanPeriod = styled.p`
  color: #9699ab;
  font-size: 14px;
  font-weight: 500;
`

export const PlanDiscountMsg = styled.p`
  margin-top: 8px;
  color: #02295a;
  font-size: 12px;
  font-weight: 500;
`

export const PeriodContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fafbff;
  border-radius: 8px;
`

export const PeriodSwitcher = styled.label`
  position: relative;
	width: 40px;
	height: 20px;
	background-color: #02295a;
	border-radius: 20px;
`

export const Circle = styled.div<{ $isChecked?: boolean }>`
	position: absolute;
	margin: 0;
	width: 12px;
	height: 12px;
	left: ${props => props.$isChecked ? "24px" : "4px"};
	top: 4px;
	background-color: white;
	border-radius: 50%;
	transition: left 0.2s;
`

export const PeriodCheckbox = styled.input`
  display: none;
`

const PeriodSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
`

export const MonthlyPeriod = styled(PeriodSpan)<{ $isChecked?: boolean }>`
  color: ${props => props.$isChecked ? "#02295a" : "#9699ab"};
`

export const YearlyPeriod = styled(PeriodSpan)<{ $isChecked?: boolean }>`
  color: ${props => props.$isChecked ? "#02295a" : "#9699ab"};
`