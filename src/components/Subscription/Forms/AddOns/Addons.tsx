import { useState } from "react"
import { TAddons } from "../../../../types/subscription.types"
import { ButtonContainer,
  FormContainer,
  FormDescription,
  FormTitle,
  GoBackBtn,
  ItemTitle,
  NextBtn } from "../styles"
import { AddonCheckbox, AddonDescription, AddonInfo, AddonLabel, AddonPrice } from "./styles"
import { ADDONS } from "../../../../data/subscriptionData"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { calculateTotalPrice, changeStep, setSelectedAddons } from "../../../../features/subscription/subscriptionSlice"


const Addons = () => {
  const { selectedAddons, period } = useAppSelector(state => state.subscription)
  const [currentAddons, setCurrentAddons] = useState(selectedAddons)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAddon: TAddons = JSON.parse(e.target.value)

    if (e.target.checked) {
      setCurrentAddons(prevAddons => ([
        ...prevAddons,
        selectedAddon
      ]))
    } else {
      setCurrentAddons(prevAddons => {
        return prevAddons.filter(addon => addon.id !== selectedAddon.id)
      })
    }
  }

  const handleStepChange = (step: number) => {
    dispatch(setSelectedAddons(currentAddons))
    if (step === 4) dispatch(calculateTotalPrice())
    dispatch(changeStep(step))
  }

  return (
    <FormContainer onSubmit={e => e.preventDefault()}>
      <div>
        <FormTitle>Pick add-ons</FormTitle>
        <FormDescription>Add-ons help enhance your gaming experience.</FormDescription>
        {ADDONS.map(addon => {
          const isChecked = !!currentAddons.find(ad => ad.id === addon.id)
          return (
            <AddonLabel key={addon.id} $isChecked={isChecked}>
              <AddonCheckbox
                type="checkbox"
                value={JSON.stringify(addon)}
                checked={isChecked}
                onChange={handleChange}
              />
              <AddonInfo>
                <ItemTitle>{addon.name}</ItemTitle>
                <AddonDescription>{addon.description}</AddonDescription>
              </AddonInfo>
              <AddonPrice>
                +${period === "mo" ? addon.price : addon.price * 10}/{period}
              </AddonPrice>
            </AddonLabel>
          )
        })}
      </div>
      <ButtonContainer>
        <GoBackBtn onClick={() => { handleStepChange(2) }}>Go Back</GoBackBtn>
        <NextBtn onClick={() => { handleStepChange(4) }}>Next Step</NextBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default Addons