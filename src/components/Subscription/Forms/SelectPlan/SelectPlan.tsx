import React, { useState } from "react"
import { TPlan, TPlanPeriod } from "../../../../types/subscription.types"
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

type SelectPlanProps = {
  plan: TPlan[]
  currentPlan: TPlan
  currentPeriod: TPlanPeriod
  handleSelectPlan: (selectedPlan: TPlan, period: TPlanPeriod, step: number) => void
}

const SelectPlan = ({ plan, currentPlan, currentPeriod, handleSelectPlan }: SelectPlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan)
  const [selectedPeriod, setSelectedPeriod] = useState(currentPeriod)

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlan: TPlan = JSON.parse(e.target.value)
    setSelectedPlan(newPlan)
  }

  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedPeriod("yr")
    } else {
      setSelectedPeriod("mo")
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
          {plan.map(p => (
            <PlanStyled
              key={p.name}
              $isSelected={p.name === selectedPlan.name}
            >
              <PlanImg src={getImageUrl(p.icon)} alt={p.icon} />
              <div>
                <ItemTitle>{p.name}</ItemTitle>
                <PlanPeriod>
                  ${selectedPeriod === "yr" ? p.price * 10 : p.price}/{selectedPeriod}
                </PlanPeriod>
                {selectedPeriod === "yr" &&
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
          <MonthlyPeriod $isChecked={selectedPeriod === "mo"}>Monthly</MonthlyPeriod>
          <PeriodSwitcher>
            <Circle $isChecked={selectedPeriod === "yr"}></Circle>
            <PeriodCheckbox
              type="checkbox"
              checked={selectedPeriod === "yr"}
              onChange={handlePeriodChange}
            />
          </PeriodSwitcher>
          <YearlyPeriod $isChecked={selectedPeriod === "yr"}>Yearly</YearlyPeriod>
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