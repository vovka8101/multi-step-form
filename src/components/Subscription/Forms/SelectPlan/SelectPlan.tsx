import { TPlan } from "../../../../types/subscription.types"

type SelectPlanProps = {
  plan: TPlan
  handleSelectPlan: (selectedPlan: TPlan) => void
  handlePrevStep: () => void
}

const SelectPlan = ({ handlePrevStep }: SelectPlanProps) => {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <button onClick={() => { handlePrevStep() }}>Prev Step</button>
    </div>
  )
}

export default SelectPlan