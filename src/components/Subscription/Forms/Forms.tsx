import { useState } from "react"
import { PLAN_PERIOD, PLAN_TYPE, TFormData, TPlan, TUserInfo } from "../../../types/subscription.types"
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

  const handleAddPersonalInfo = (pInfo: TUserInfo) => {
    setPersonalInfo(pInfo)
    handleChangeStep(currentStep + 1)
  }

  const handleSelectPlan = (selectedPlan: PLAN_TYPE, period: PLAN_PERIOD, step: number) => {
    setPlan(prevPlan => ({
      ...prevPlan,
      selectedPlan,
      period
    }))
    handleChangeStep(currentStep + step)
  }

  return (
    <>
      {currentStep === 1 &&
        <PersonalInfo
          userInfo={personalInfo}
          handleAddPersonalInfo={handleAddPersonalInfo}
        />
      }
      {currentStep === 2 &&
        <SelectPlan plan={plan} handleSelectPlan={handleSelectPlan} />
      }
    </>
  )
}

export default Forms