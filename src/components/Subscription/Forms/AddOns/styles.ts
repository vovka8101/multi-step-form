import styled from "styled-components"

export const AddonLabel = styled.label<{ $isChecked?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: ${props => props.$isChecked ? "#fafbff": "transparent"};
  border: ${props => props.$isChecked ? "1px solid #473dff": "1px solid #d6d9e6"};
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: border 0.2s;

  @media (orientation: portrait) {
    padding: 14px 12px;
    gap: 14px;
    margin-bottom: 12px;
  }

  &:hover {
    border: 1px solid #473dff;
  }
`

export const AddonCheckbox = styled.input`
  min-width: 18px;
  min-height: 18px;
  accent-color: #473dff;
  cursor: pointer;
`

export const AddonInfo = styled.div`
  flex-grow: 1;
`

export const AddonDescription = styled.p`
  color: #9699ab;
  font-size: 14px;
  font-weight: 500;

  @media (orientation: portrait) {
    font-size: 12px;
  }
`

export const AddonPrice = styled.p`
  color: #473dff;
  font-size: 14px;
  font-weight: 500;

  @media (orientation: portrait) {
    font-size: 12px;
  }
`