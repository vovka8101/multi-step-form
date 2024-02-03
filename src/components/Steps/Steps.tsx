import { TStepsData } from "../../types/subscription.styles"
import Step from "./Step"
import { StyledSteps } from "./styles"

type TStepsProps = {
  stepsData: TStepsData
}

const Steps = ({ stepsData }: TStepsProps) => {

  return (
    <StyledSteps>
      {stepsData.steps.map(step => (
        <Step key={step.stepNumber} {...step} isStepActive={stepsData.currentStep === step.stepNumber} />
      ))}
    </StyledSteps>
  )
}

export default Steps