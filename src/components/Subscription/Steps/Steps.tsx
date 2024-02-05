import { TStep } from "../../../types/subscription.types"
import Step from "./Step"
import { StyledSteps } from "./styles"

const STEPS: TStep[] = [
  {stepNumber: 1, stepTitle: "Your info"},
  {stepNumber: 2, stepTitle: "Select plan"},
  {stepNumber: 3, stepTitle: "Add-ons"},
  {stepNumber: 4, stepTitle: "Summary"}
]

type TStepsProps = {
  currentStep: number
}

const Steps = ({ currentStep }: TStepsProps) => {
  return (
    <StyledSteps>
      {STEPS.map(step => (
        <Step
          key={step.stepNumber}
          {...step}
          isStepActive={currentStep === step.stepNumber}
        />
      ))}
    </StyledSteps>
  )
}

export default Steps