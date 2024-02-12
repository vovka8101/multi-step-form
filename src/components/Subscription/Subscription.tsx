import Forms from "./Forms/Forms"
import Steps from "./Steps/Steps"
import { SubscriptionStyled } from "./styles"


const Subscription = () => {
  return (
    <SubscriptionStyled>
      <Steps />
      <Forms />
    </SubscriptionStyled>
  )
}

export default Subscription