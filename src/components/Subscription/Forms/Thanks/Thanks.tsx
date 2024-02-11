import { FormTitle, ThanksContainer } from "../styles"
import thankYouIcon from "../../../../assets/images/icon-thank-you.svg"
import { ThanksIcon, ThanksText } from "./styles"

const Thanks = () => {
  return (
    <ThanksContainer>
      <ThanksIcon src={thankYouIcon} alt="Thank you" />
      <FormTitle>Thank you!</FormTitle>
      <ThanksText>Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </ThanksText>
    </ThanksContainer>
  )
}

export default Thanks