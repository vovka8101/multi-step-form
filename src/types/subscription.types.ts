export type TStep = {
  stepNumber: number
  stepTitle: string
}

export type TUserInfo = {
  name: string
  email: string
  phone: string
}

enum Periods {
  month,
  year,
}

export type TPlan = {
  period: keyof typeof Periods
  data: {
    name: string
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