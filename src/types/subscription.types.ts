export type TStep = {
  stepNumber: number
  stepTitle: string
}

export type TUserInfo = {
  name: string
  email: string
  phone: string
}

export type TPlanPeriod = "mo" | "yr"

export type TPlanName = "Arcade" | "Advanced" | "Pro"

export type TPlan = {
  name: TPlanName
  price: number
  icon: string
}

export type TAddons = {
  readonly id: number
  name: string
  description: string
  price: number
}

export type TFormData = {
  plan: TPlan[]
  addons: TAddons[]
}

export type TOptions = {
  period: TPlanPeriod
  selectedPlan: TPlan
  selectedAddons: TAddons[]
  totalAddonsPrice: number
}