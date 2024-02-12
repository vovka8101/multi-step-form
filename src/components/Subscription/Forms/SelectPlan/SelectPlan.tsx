import React from "react"
import { TPlan } from "../../../../types/subscription.types"
import { getImageUrl } from "../../../../utils/getImageUrl"
import { ButtonContainer, FormContainer, FormDescription, FormTitle, GoBackBtn, ItemTitle, NextBtn } from "../styles"
import { Circle,
  MonthlyPeriod,
  PeriodCheckbox,
  PeriodContainer,
  PeriodSwitcher,
  PlanContainer,
  PlanDiscountMsg,
  PlanImg,
  PlanInput,
  PlanPeriod,
  PlanStyled,
  YearlyPeriod
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { changeStep, setSelectedPlan, togglePeriod } from "../../../../features/subscription/subscriptionSlice"
import { PLANS } from "../../../../data/subscriptionData"


const SelectPlan = () => {
  const { selectedPlan, period } = useAppSelector(state => state.subscription)
  const dispatch = useAppDispatch()

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlan: TPlan = JSON.parse(e.target.value)
    dispatch(setSelectedPlan(newPlan))
  }

  return (
    <FormContainer onSubmit={e => e.preventDefault()}>
      <div>
        <FormTitle>Select your plan</FormTitle>
        <FormDescription>You have the option of monthly or yearly billing.</FormDescription>
        <PlanContainer>
          {PLANS.map(p => (
            <PlanStyled
              key={p.id}
              $isSelected={p.name === selectedPlan.name}
            >
              <PlanImg src={getImageUrl(p.icon)} alt={p.icon} />
              <div>
                <ItemTitle>{p.name}</ItemTitle>
                <PlanPeriod>
                  ${period === "yr" ? p.price * 10 : p.price}/{period}
                </PlanPeriod>
                {period === "yr" &&
                  <PlanDiscountMsg>2 months free</PlanDiscountMsg>
                }
              </div>
              <PlanInput
                type="radio"
                name="plan"
                value={JSON.stringify(p)}
                checked={p.name === selectedPlan.name}
                onChange={handlePlanChange}
              />
            </PlanStyled>
          ))}
        </PlanContainer>
        <PeriodContainer>
          <MonthlyPeriod $isChecked={period === "mo"}>Monthly</MonthlyPeriod>
          <PeriodSwitcher>
            <Circle $isChecked={period === "yr"}></Circle>
            <PeriodCheckbox
              type="checkbox"
              checked={period === "yr"}
              onChange={() => { dispatch(togglePeriod()) }}
            />
          </PeriodSwitcher>
          <YearlyPeriod $isChecked={period === "yr"}>Yearly</YearlyPeriod>
        </PeriodContainer>
      </div>
      <ButtonContainer>
        <GoBackBtn onClick={() => { dispatch(changeStep(1)) }}>Go Back</GoBackBtn>
        <NextBtn onClick={() => { dispatch(changeStep(3)) }}>Next Step</NextBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default SelectPlan