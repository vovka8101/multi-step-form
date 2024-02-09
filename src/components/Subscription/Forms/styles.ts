import styled from "styled-components"

export const FormContainer = styled.form`
  flex-basis: 50%;
  margin-inline: auto;
  padding: 40px 2px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FormTitle = styled.h2`
  color: #02295a;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const FormDescription = styled.p`
  color: #9699ab;
  font-weight: 400;
  margin-bottom: 40px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: background-color 0.2s, color 0.2s;
  border: none;
  outline: none;
  cursor: pointer;
`

export const NextBtn = styled(Button)`
  align-self: flex-end;
  background-color: #02295a;

  &:hover {
    background-color: #473dff;
  }
`

export const GoBackBtn = styled(Button)`
  width: auto;
  color: #9699ab;

  &:hover {
    color: #02295a;
  }
`