import { useRef, useState } from "react"
import { TAddons, TPlanPeriod } from "../../../../types/subscription.types"
import { ButtonContainer,
  FormContainer,
  FormDescription,
  FormTitle,
  GoBackBtn,
  ItemTitle,
  NextBtn } from "../styles"
import { AddonCheckbox, AddonDescription, AddonInfo, AddonLabel, AddonPrice } from "./styles"

type AddonsProps = {
  addons: TAddons[]
  totalAddonsPrice: number
  currentAddons: TAddons[]
  handleSelectAddons: (selectedAddons: TAddons[], totalPrice: number, step: number) => void
  selectedPeriod: TPlanPeriod
}

const Addons = ({ addons, totalAddonsPrice, currentAddons, handleSelectAddons, selectedPeriod }: AddonsProps) => {
  const [selectedAddons, setSelectedAddons] = useState(currentAddons)
  const totalPrice = useRef(totalAddonsPrice)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAddon: TAddons = JSON.parse(e.target.value)

    if (e.target.checked) {
      setSelectedAddons(prevAddons => ([
        ...prevAddons,
        selectedAddon
      ]))
      totalPrice.current += selectedAddon.price
    } else {
      setSelectedAddons(prevAddons => {
        return prevAddons.filter(addon => addon.id !== selectedAddon.id)
      })
      totalPrice.current -= selectedAddon.price
    }
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()

    const btn = e.nativeEvent.submitter as HTMLButtonElement

    if (btn.name === "prev") {
      handleSelectAddons(selectedAddons, totalPrice.current, -1)
    } else {
      handleSelectAddons(selectedAddons, totalPrice.current, 1)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormTitle>Pick add-ons</FormTitle>
        <FormDescription>Add-ons help enhance your gaming experience.</FormDescription>
        {addons.map(addon => {
          const isChecked = !!selectedAddons.find(ad => ad.id === addon.id)
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
                +${selectedPeriod === "mo" ? addon.price : addon.price * 10}/{selectedPeriod}
              </AddonPrice>
            </AddonLabel>
          )
        })}
      </div>
      <ButtonContainer>
        <GoBackBtn name="prev">Go Back</GoBackBtn>
        <NextBtn name="next">Next Step</NextBtn>
      </ButtonContainer>
    </FormContainer>
  )
}

export default Addons