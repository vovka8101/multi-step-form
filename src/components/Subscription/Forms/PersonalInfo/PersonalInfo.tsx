import { useState } from "react"
import { TUserInfo } from "../../../../types/subscription.types"

type PersonalInfoProps = {
  userInfo: TUserInfo
  handleAddPersonalInfo: (pInfo: TUserInfo) => void
}

const PersonalInfo = ({ userInfo, handleAddPersonalInfo }: PersonalInfoProps) => {
  const [name, setName] = useState(userInfo.name)
  const [email, setEmail] = useState(userInfo.email)
  const [phone, setPhone] = useState(userInfo.phone)

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO if all valid then handleAddPersonalInfo
    handleAddPersonalInfo({
      name,
      email,
      phone
    })
  }

  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameInput} />
        <input type="email" value={email} onChange={handleEmailInput} />
        <input type="tel" value={phone} onChange={handlePhoneInput} />
        <button>Next Step</button>
      </form>
    </div>
  )
}

export default PersonalInfo