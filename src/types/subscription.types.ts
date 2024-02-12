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
  readonly id: number
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

export type TSubscriptionState = {
  step: number
  userInfo: TUserInfo
  period: TPlanPeriod
  selectedPlan: TPlan
  selectedAddons: TAddons[]
  totalPrice: number
}