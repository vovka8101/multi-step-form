import { useState } from "react"
import { TFormData } from "../../types/subscription.types"
import Forms from "./Forms/Forms"
import Steps from "./Steps/Steps"
import { SubscriptionStyled } from "./styles"
import { initialFormData } from "../../data/data"


const Subscription = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<TFormData>(initialFormData)

  const handleChangeStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleSubscription = (fData: TFormData) => {
    setFormData(fData)
  }

  return (
    <SubscriptionStyled>
      <Steps currentStep={currentStep} />
      <Forms
        formData={formData}
        currentStep={currentStep}
        handleChangeStep={handleChangeStep}
        handleSubscription={handleSubscription}
      />
    </SubscriptionStyled>
  )
}

export default Subscription