import { useState } from "react"
import Steps from "./components/Steps/Steps"
import { AppStyled, GlobalStyles } from "./styles"
import { TFormData } from "./types/subscription.styles"
import SubscriptionForm from "./components/Forms/SubscriptionForm/SubscriptionForm"

const initialStepsData = {
  currentStep: 1,
  steps: [
    {stepNumber: 1, stepTitle: "Your info"},
    {stepNumber: 2, stepTitle: "Select plan"},
    {stepNumber: 3, stepTitle: "Add-ons"},
    {stepNumber: 4, stepTitle: "Summary"}
  ]
}

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


function App() {
  const [stepsData, setStepsData] = useState(initialStepsData)
  // const [formData, setFormData] = useState<TFormData>(initialFormData)


  return (
    <AppStyled>
      <GlobalStyles />
      <Steps stepsData={stepsData} />
      <SubscriptionForm />
    </AppStyled>
  )
}

export default App
