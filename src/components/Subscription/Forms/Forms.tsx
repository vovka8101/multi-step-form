import { useState } from "react"
import { TAddons, TFormData, TPlan, TUserInfo, TPlanPeriod } from "../../../types/subscription.types"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import SelectPlan from "./SelectPlan/SelectPlan"
import Addons from "./AddOns/Addons"
import Summary from "./Summary/Summary"
import Thanks from "./Thanks/Thanks"
import { initialOptions, initialUserInfo } from "../../../data/data"


type FormsProps = {
  currentStep: number
  handleChangeStep: (step: number) => void
  formData: TFormData
  handleSubscription: (fData: TFormData) => void
}

const Forms = ({ currentStep, handleChangeStep, formData }: FormsProps) => {
  const [userInfo, setUserInfo] = useState<TUserInfo>(initialUserInfo)
  const [options, setOptions] = useState(initialOptions)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handlePrevStep = (step: number) => {
    handleChangeStep(step)
  }

  const handleAddUserInfo = (pInfo: TUserInfo) => {
    setUserInfo(pInfo)
    handleChangeStep(currentStep + 1)
  }

  const handleSelectPlan = (selectedPlan: TPlan, period: TPlanPeriod, step: number) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      period,
      selectedPlan
    }))
    handleChangeStep(currentStep + step)
  }

  const handleSelectAddons = (selectedAddons: TAddons[], totalPrice: number, step: number) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      selectedAddons,
      totalAddonsPrice: totalPrice
    }))
    handleChangeStep(currentStep + step)
  }

  const handleSubmitSubscription = () => {
    setIsConfirmed(true)
    console.log(options)
  }

  return (
    <>
      {currentStep === 1 &&
        <PersonalInfo
          userInfo={userInfo}
          handleAddUserInfo={handleAddUserInfo}
        />
      }
      {currentStep === 2 &&
        <SelectPlan
          plan={formData.plan}
          currentPlan={options.selectedPlan}
          currentPeriod={options.period}
          handleSelectPlan={handleSelectPlan} 
        />
      }
      {currentStep === 3 &&
        <Addons
          addons={formData.addons}
          totalAddonsPrice={options.totalAddonsPrice}
          currentAddons={options.selectedAddons}
          handleSelectAddons={handleSelectAddons}
          selectedPeriod={options.period}
        />
      }
      {(currentStep === 4 && !isConfirmed) &&
        <Summary
          options={options}
          handlePrevStep={handlePrevStep}
          handleSubmitSubscription={handleSubmitSubscription}
        />
      }
      {isConfirmed && <Thanks />}
    </>
  )
}

export default Forms