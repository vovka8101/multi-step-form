import { useState } from "react"
import { TUserInfo } from "../../../../types/subscription.types"
import { FormContainer, FormDescription, FormTitle, NextBtn } from "../styles"
import { ErrorMsg, FormGroup, InputStyled, LabelStyled } from "./styles"
import { checkInput } from "../../../../utils/checkInput"

type PersonalInfoProps = {
  userInfo: TUserInfo
  handleAddPersonalInfo: (pInfo: TUserInfo) => void
}

const PersonalInfo = ({ userInfo, handleAddPersonalInfo }: PersonalInfoProps) => {
  const [user, setUser] = useState({ error: userInfo.name ? "" : "This field is required", name: userInfo.name })
  const [email, setEmail] = useState({ error: userInfo.email ? "" : "This field is required", address: userInfo.email })
  const [phone, setPhone] = useState({ error: userInfo.phone ? "" : "This field is required", number: userInfo.phone })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "name")

    setUser({ error: err, name: e.target.value })
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "email")

    setEmail({ error: err, address: value })
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const err = checkInput(value, "phone")

    setPhone({ error: err, number: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!(user.error || email.error || phone.error)) {
      handleAddPersonalInfo({
        name: user.name,
        email: email.address,
        phone: phone.number
      })
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
            value={user.name}
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
            value={email.address}
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
            value={phone.number}
            onChange={handlePhoneInput}
            placeholder="e.g. +1 234 567 890"
            $isError={!!(phone.error && isSubmitted)}
          />
          {(phone.error && isSubmitted) && <ErrorMsg>{phone.error}</ErrorMsg>}
        </FormGroup>
      </div>
      <NextBtn>Next Step</NextBtn>
    </FormContainer>
  )
}

export default PersonalInfo