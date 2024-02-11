import styled, { css } from "styled-components"

const ContainerCommon = css`
  flex-basis: 50%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.form`
  ${ContainerCommon};
  padding: 40px 2px 16px;
  justify-content: space-between;

  @media (orientation: portrait) {
    padding: 16px 8px;
  }
`

export const ThanksContainer = styled.div`
  ${ContainerCommon};
  min-height: 370px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FormTitle = styled.h2`
  color: #02295a;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (orientation: portrait) {
    font-size: 24px;
  }
`

export const ItemTitle = styled.h3`
  color: #02295a;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 6px;

  @media (orientation: portrait) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`

export const FormDescription = styled.p`
  color: #9699ab;
  font-weight: 400;
  margin-bottom: 40px;

  @media (orientation: portrait) {
    line-height: 24px;
    margin-bottom: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (orientation: portrait) {
    position: fixed;
    padding: 16px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    z-index: 2;
  }
`

const Button = styled.button`
  font-family: "Ubuntu", sans-serif;
  width: 124px;
  padding: 15px 0;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s, opacity 0.2s;
  border: none;
  outline: none;
  cursor: pointer;

  @media (orientation: portrait) {
    width: 96px;
    padding: 12px 0;
    font-size: 14px;
    border-radius: 4px;
  }
`

export const GoBackBtn = styled(Button)`
  width: auto;
  color: #9699ab;

  &:hover {
    color: #02295a;
  }
`

export const NextBtn = styled(Button)`
  align-self: flex-end;
  background-color: #02295a;

  &:hover {
    background-color: #473dff;
  }
`

export const SubmitBtn = styled(Button)`
  background-color: #473dff;

  &:hover {
    opacity: 0.6;
  }
`