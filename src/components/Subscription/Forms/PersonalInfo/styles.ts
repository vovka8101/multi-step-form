import styled from "styled-components"

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media (orientation: portrait) {
    margin-bottom: 12px;
  }
`

export const LabelStyled = styled.label`
  display: block;
  color: #02295a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (orientation: portrait) {
    margin-bottom: 4px;
  }
`

export const InputStyled = styled.input<{ $isError?: boolean }>`
  width: 100%;
  padding: 14px;
  font-family: "Ubuntu", sans-serif;
  color: #02295a;
  font-size: 1rem;
  font-weight: 500;
  border: ${props => props.$isError ? "1px solid #ed3548" : "1px solid #d6d9e6"};
  border-radius: 8px;
  outline: none;

  @media (orientation: portrait) {
    padding: 12px 14px;
    font-size: 15px;
  }

  &::placeholder {
    color: #9699ab;
  }

  &:focus {
    border: 1px solid #473dff;
  }
`

export const ErrorMsg = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  color: #ed3548;
  font-size: 14px;
  font-weight: 700;
`