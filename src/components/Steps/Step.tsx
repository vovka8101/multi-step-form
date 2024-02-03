import { StepNumberText, StepTitle, StyledStep, StyledStepNumber } from "./styles"

type StepProps = {
  stepNumber: number
  stepTitle: string
  isStepActive: boolean
}

const Step = ({ stepNumber, stepTitle, isStepActive }: StepProps) => {
  return (
    <StyledStep>
      <StyledStepNumber $isStepActive={isStepActive}>{stepNumber}</StyledStepNumber>
      <div>
        <StepNumberText>Step {stepNumber}</StepNumberText>
        <StepTitle>{stepTitle}</StepTitle>
      </div>
    </StyledStep>
  )
}

export default Step