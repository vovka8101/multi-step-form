import { useState } from "react"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import SelectPlan from "./SelectPlan/SelectPlan"
import Addons from "./AddOns/Addons"
import Summary from "./Summary/Summary"
import Thanks from "./Thanks/Thanks"
import { useAppSelector } from "../../../app/hooks"

const Forms = () => {
  const { step } = useAppSelector(state => state.subscription)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleSubmitSubscription = () => {
    setIsConfirmed(true)
  }

  return (
    <>
      {step === 1 &&
        <PersonalInfo />
      }
      {step === 2 &&
        <SelectPlan />
      }
      {step === 3 &&
        <Addons />
      }
      {(step === 4 && !isConfirmed) &&
        <Summary handleSubmitSubscription={handleSubmitSubscription} />
      }
      {isConfirmed && <Thanks />}
    </>
  )
}

export default Forms