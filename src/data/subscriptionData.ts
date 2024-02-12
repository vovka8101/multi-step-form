import { TAddons, TPlan, TStep } from "../types/subscription.types";

export const STEPS: TStep[] = [
  {stepNumber: 1, stepTitle: "Your info"},
  {stepNumber: 2, stepTitle: "Select plan"},
  {stepNumber: 3, stepTitle: "Add-ons"},
  {stepNumber: 4, stepTitle: "Summary"}
]

export const PLANS: TPlan[] = [
  {id: 1, name: "Arcade", price: 9, icon: "icon-arcade.svg"},
  {id: 2, name: "Advanced", price: 12, icon: "icon-advanced.svg"},
  {id: 3, name: "Pro", price: 15, icon: "icon-pro.svg"}
]

export const ADDONS: TAddons[] = [
  {id: 1, name: "Online service", description: "Access to multiplayer games", price: 1},
  {id: 2, name: "Larger storage", description: "Extra 1TB of cloud save", price: 2},
  {id: 3, name: "Customizable profile", description: "Custom theme on your profile", price: 2}
]

export const initialUserInfo = {
  name: "",
  email: "",
  phone: ""
}
