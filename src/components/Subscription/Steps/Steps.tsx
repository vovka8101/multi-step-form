import { useAppSelector } from "../../../app/hooks"
import { STEPS } from "../../../data/subscriptionData"
import Step from "./Step"
import { StyledSteps } from "./styles"

const Steps = () => {
  const currentStep = useAppSelector(state => state.subscription.step)

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