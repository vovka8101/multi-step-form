import { TFormData, TOptions } from "../types/subscription.types";

export const initialFormData: TFormData = {
  plan: [
    {name: "Arcade", price: 9, icon: "icon-arcade.svg"},
    {name: "Advanced", price: 12, icon: "icon-advanced.svg"},
    {name: "Pro", price: 15, icon: "icon-pro.svg"}
  ],
  addons: [
    {id: 1, name: "Online service", description: "Access to multiplayer games", price: 1},
    {id: 2, name: "Larger storage", description: "Extra 1TB of cloud save", price: 2},
    {id: 3, name: "Customizable profile", description: "Custom theme on your profile", price: 2},
  ]
}

export const initialUserInfo = {
  name: "",
  email: "",
  phone: ""
}

export const initialOptions: TOptions = {
  period: "mo",
  selectedPlan: {name: "Arcade", price: 9, icon: "icon-arcade.svg"},
  selectedAddons: [],
  totalAddonsPrice: 0
}