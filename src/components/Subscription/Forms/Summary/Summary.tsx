import { TOptions } from "../../../../types/subscription.types"
import { ButtonContainer,
  FormContainer,
  FormDescription,
  FormTitle,
  GoBackBtn,
  ItemTitle,
  SubmitBtn } from "../styles"
import { AddonName, AddonPrice, AddonRow, ChangePlanLink, PlanPrice, PlanRow, SummaryContent, TotalPrice, TotalPriceContainer } from "./styles"

type SummaryProps = {
  options: TOptions
  handlePrevStep: (step: number) => void
  handleSubmitSubscription: () => void
}

const Summary = ({ options, handlePrevStep, handleSubmitSubscription }: SummaryProps) => {
  const getTotalPrice = () => {
    if (options.period === "mo") {
      return options.selectedPlan.price + options.totalAddonsPrice
    }

    return (options.selectedPlan.price + options.totalAddonsPrice) * 10
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()

    const btn = e.nativeEvent.submitter as HTMLButtonElement

    if (btn.name === "prev") {
      handlePrevStep(3)
    } else {
      handleSubmitSubscription()
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormTitle>Finishing up</FormTitle>
        <FormDescription>Double-check everything looks OK before confirming.</FormDescription>
        <SummaryContent>
          <PlanRow>
            <div>
              <ItemTitle>
                {options.selectedPlan.name} ({options.period === "mo" ? "Monthly" : "Yearly"})
              </ItemTitle>
              <ChangePlanLink onClick={() => { handlePrevStep(2) }}>Change</ChangePlanLink>
            </div>
            <PlanPrice>
              ${options.period === "mo"
                ? options.selectedPlan.price
                : options.selectedPlan.price * 10}/{options.period}
            </PlanPrice>
          </PlanRow>
          <div>
            {options.selectedAddons.map(addon => (
              <AddonRow key={addon.id}>
                <AddonName>{addon.name}</AddonName>
                <AddonPrice>
                  +${options.period === "mo" ? addon.price : addon.price * 10}/
                  {options.period}
                </AddonPrice>
              </AddonRow>
            ))}
          </div>
        </SummaryContent>
        <TotalPriceContainer>
          <p>Total (per {options.period === "mo" ? "month" : "year"})</p>
          <TotalPrice>+${getTotalPrice()}/{options.period}</TotalPrice>
        </TotalPriceContainer>
      </div>
      <ButtonContainer>
        <GoBackBtn name="prev">Go Back</GoBackBtn>
        <SubmitBtn name="submit">Confirm</SubmitBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default Summary