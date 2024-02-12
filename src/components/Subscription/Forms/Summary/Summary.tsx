import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { changeStep } from "../../../../features/subscription/subscriptionSlice"
import { ButtonContainer,
  FormContainer,
  FormDescription,
  FormTitle,
  GoBackBtn,
  ItemTitle,
  SubmitBtn } from "../styles"
import { 
  AddonName, 
  AddonPrice, 
  AddonRow, 
  ChangePlanLink, 
  PlanPrice, 
  PlanRow, 
  SummaryContent, 
  TotalPrice, 
  TotalPriceContainer } from "./styles"

type SummaryProps = {
  handleSubmitSubscription: () => void
}

const Summary = ({ handleSubmitSubscription }: SummaryProps) => {
  const options = useAppSelector(state => state.subscription)
  const dispatch = useAppDispatch()

  return (
    <FormContainer onSubmit={e => e.preventDefault()}>
      <div>
        <FormTitle>Finishing up</FormTitle>
        <FormDescription>Double-check everything looks OK before confirming.</FormDescription>
        <SummaryContent>
          <PlanRow>
            <div>
              <ItemTitle>
                {options.selectedPlan.name} ({options.period === "mo" ? "Monthly" : "Yearly"})
              </ItemTitle>
              <ChangePlanLink onClick={() => { dispatch(changeStep(2)) }}>Change</ChangePlanLink>
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
          <TotalPrice>+${options.totalPrice}/{options.period}</TotalPrice>
        </TotalPriceContainer>
      </div>
      <ButtonContainer>
        <GoBackBtn onClick={() => { dispatch(changeStep(3)) }}>Go Back</GoBackBtn>
        <SubmitBtn onClick={() => { handleSubmitSubscription() }}>Confirm</SubmitBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default Summary