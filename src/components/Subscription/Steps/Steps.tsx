import { useAppSelector } from "../../../app/hooks"
import { STEPS } from "../../../data/subscriptionData"
import Step from "./Step"
import { StyledSteps } from "./styles"
import bgImg from "../../../assets/images/bg-sidebar-desktop.svg"
import bgImgMobile from "../../../assets/images/bg-sidebar-mobile.svg"

const Steps = () => {
  const currentStep = useAppSelector(state => state.subscription.step)

  return (
    <StyledSteps $bgImg={bgImg} $bgImgMobile={bgImgMobile}>
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