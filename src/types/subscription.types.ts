export type TStep = {
  stepNumber: number
  stepTitle: string
}

export type TUserInfo = {
  name: string
  email: string
  phone: string
}

export enum PLAN_PERIOD {
  mo,
  yr
}

export enum PLAN_TYPE {
  Arcade,
  Advanced,
  Pro
}

export type TPlan = {
  period: PLAN_PERIOD
  selectedPlan: PLAN_TYPE
  data: {
    name: PLAN_TYPE
    price: number
    icon: string
  }[]
}

export type TAddons = {
  name: string
  description: string
  price: number
  selected: boolean
}

export type TFormData = {
  userInfo: TUserInfo
  plan: TPlan
  addons: TAddons[]
}