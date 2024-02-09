import React, { useState } from "react"
import { PLAN_PERIOD, PLAN_TYPE, TPlan } from "../../../../types/subscription.types"
import { getImageUrl } from "../../../../utils/getImageUrl"
import { ButtonContainer, FormContainer, FormDescription, FormTitle, GoBackBtn, NextBtn } from "../styles"
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
  PlanTitle,
  YearlyPeriod
} from "./styles"

type SelectPlanProps = {
  plan: TPlan
  handleSelectPlan: (selectedPlan: PLAN_TYPE, period: PLAN_PERIOD, step: number) => void
}

const SelectPlan = ({ plan, handleSelectPlan }: SelectPlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState<PLAN_TYPE>(plan.selectedPlan)
  const [selectedPeriod, setSelectedPeriod] = useState<PLAN_PERIOD>(plan.period)

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(PLAN_TYPE[e.target.value as keyof typeof PLAN_TYPE])
  }

  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedPeriod(PLAN_PERIOD.yr)
    } else {
      setSelectedPeriod(PLAN_PERIOD.mo)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()

    const btn = e.nativeEvent.submitter as HTMLButtonElement

    if (btn.name === "prev") {
      handleSelectPlan(selectedPlan, selectedPeriod, -1)
    } else {
      handleSelectPlan(selectedPlan, selectedPeriod, 1)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormTitle>Select your plan</FormTitle>
        <FormDescription>You have the option of monthly or yearly billing.</FormDescription>
        <PlanContainer>
          {plan.data.map(p => (
            <PlanStyled
              key={p.name}
              $isSelected={PLAN_TYPE[p.name] === PLAN_TYPE[selectedPlan]}
            >
              <PlanImg src={getImageUrl(p.icon)} alt={p.icon} />
              <PlanTitle>{PLAN_TYPE[p.name]}</PlanTitle>
              <PlanPeriod>
                ${PLAN_PERIOD[selectedPeriod] === "yr" ? p.price * 10 : p.price}/{PLAN_PERIOD[selectedPeriod]}
              </PlanPeriod>
              {PLAN_PERIOD[selectedPeriod] === "yr" &&
                <PlanDiscountMsg>2 months free</PlanDiscountMsg>
              }
              <PlanInput
                type="radio"
                name="plan"
                value={PLAN_TYPE[p.name]}
                checked={PLAN_TYPE[p.name] === PLAN_TYPE[selectedPlan]}
                onChange={handlePlanChange}
              />
            </PlanStyled>
          ))}
        </PlanContainer>
        <PeriodContainer>
          <MonthlyPeriod $isChecked={PLAN_PERIOD[selectedPeriod] === "mo"}>Monthly</MonthlyPeriod>
          <PeriodSwitcher>
            <Circle $isChecked={PLAN_PERIOD[selectedPeriod] === "yr"}></Circle>
            <PeriodCheckbox
              type="checkbox"
              checked={PLAN_PERIOD[selectedPeriod] === "yr"}
              onChange={handlePeriodChange}
            />
          </PeriodSwitcher>
          <YearlyPeriod $isChecked={PLAN_PERIOD[selectedPeriod] === "yr"}>Yearly</YearlyPeriod>
        </PeriodContainer>
      </div>
      <ButtonContainer>
        <GoBackBtn name="prev">Go Back</GoBackBtn>
        <NextBtn name="next">Next Step</NextBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default SelectPlan