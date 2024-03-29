import { useState } from "react"
import { ButtonContainer, FormContainer, FormDescription, FormTitle, NextBtn } from "../styles"
import { ErrorMsg, FormGroup, InputStyled, LabelStyled } from "./styles"
import { checkInput } from "../../../../utils/checkInput"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { changeStep, setUserInfo } from "../../../../features/subscription/subscriptionSlice"
import { usePersonalInfo } from "../../../../hooks/usePersonalInfo"


const PersonalInfo = () => {
  const { userInfo } = useAppSelector(state => state.subscription)
  const dispatch = useAppDispatch()
  const [user, setUser] = usePersonalInfo(userInfo.name)
  const [email, setEmail] = usePersonalInfo(userInfo.email)
  const [phone, setPhone] = usePersonalInfo(userInfo.phone)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "name")

    setUser({ error: err, value: e.target.value })
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "email")

    setEmail({ error: err, value })
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "phone")

    setPhone({ error: err, value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!(user.error || email.error || phone.error)) {
      const newUserInfo = {
        name: user.value,
        email: email.value,
        phone: phone.value
      }
      dispatch(setUserInfo(newUserInfo))
      dispatch(changeStep(2))
    }

    setIsSubmitted(true)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormTitle>Personal info</FormTitle>
        <FormDescription>Please provide your name, email address, and phone number.</FormDescription>
        <FormGroup>
          <LabelStyled>Name</LabelStyled>
          <InputStyled
            type="text"
            value={user.value}
            onChange={handleNameInput}
            placeholder="e.g. Stephen King"
            $isError={!!(user.error && isSubmitted)}
          />
          {(user.error && isSubmitted) && <ErrorMsg>{user.error}</ErrorMsg>}
        </FormGroup>
        <FormGroup>
          <LabelStyled>Email Address</LabelStyled>
          <InputStyled
            type="email"
            value={email.value}
            onChange={handleEmailInput}
            placeholder="e.g. stephenking@lorem.com"
            $isError={!!(email.error && isSubmitted)}
          />
          {(email.error && isSubmitted) && <ErrorMsg>{email.error}</ErrorMsg>}
        </FormGroup>
        <FormGroup>
          <LabelStyled>Phone Number</LabelStyled>
          <InputStyled
            type="tel"
            value={phone.value}
            onChange={handlePhoneInput}
            placeholder="e.g. +1 234 567 890"
            $isError={!!(phone.error && isSubmitted)}
          />
          {(phone.error && isSubmitted) && <ErrorMsg>{phone.error}</ErrorMsg>}
        </FormGroup>
      </div>
      <ButtonContainer>
        <span></span>
        <NextBtn>Next Step</NextBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default PersonalInfo