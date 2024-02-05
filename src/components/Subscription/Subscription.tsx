import { useState } from "react"
import { TFormData } from "../../types/subscription.types"
import Forms from "./Forms/Forms"
import Steps from "./Steps/Steps"
import { SubscriptionStyled } from "./styles"

const initialFormData: TFormData = {
  userInfo: {
    name: "",
    email: "",
    phone: ""
  },
  plan: {
    period: "month",
    data: [
      {name: "Arcade", price: 9, icon: "icon-arcade.svg"},
      {name: "Advanced", price: 12, icon: "icon-advanced.svg"},
      {name: "Pro", price: 15, icon: "icon-pro.svg"}
    ]
  },
  addons: [
    {name: "Online service", description: "Access to multiplayer games", price: 1, selected: false},
    {name: "Large storage", description: "Extra 1TB of cloud save", price: 2, selected: false},
    {name: "Customizable profile", description: "Custom theme on your profile", price: 2, selected: false},
  ]
}

// type SubscriptionProps = {
//   state
// }


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