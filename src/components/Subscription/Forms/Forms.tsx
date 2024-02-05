import { useState } from "react"
import { TFormData, TPlan, TUserInfo } from "../../../types/subscription.types"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import SelectPlan from "./SelectPlan/SelectPlan"


type FormsProps = {
  currentStep: number
  handleChangeStep: (step: number) => void
  formData: TFormData
  handleSubscription: (fData: TFormData) => void
}

const Forms = ({ currentStep, handleChangeStep, formData }: FormsProps) => {
  const [personalInfo, setPersonalInfo] = useState<TUserInfo>(formData.userInfo)
  const [plan, setPlan] = useState<TPlan>(formData.plan)
  // const [addons, setAddons] = useState<TAddons>(formData.addons)

  const handlePrevStep = () => {
    handleChangeStep(currentStep - 1)
  }

  const handleAddPersonalInfo = (pInfo: TUserInfo) => {
    setPersonalInfo(pInfo)
    handleChangeStep(currentStep + 1)
  }

  const handleSelectPlan = (selectedPlan: TPlan) => {
    setPlan(selectedPlan)
    handleChangeStep(currentStep + 1)
  }

  return (
    <div>
      {currentStep === 1 &&
        <PersonalInfo
          userInfo={personalInfo}
          handleAddPersonalInfo={handleAddPersonalInfo}
        />
      }
      {currentStep === 2 &&
        <SelectPlan plan={plan} handleSelectPlan={handleSelectPlan} handlePrevStep={handlePrevStep} />
      }
    </div>
  )
}

export default Forms