import { TUserInfo, TPlan, TAddons } from './../../types/subscription.types';
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { TSubscriptionState } from "../../types/subscription.types"
import { initialUserInfo } from "../../data/subscriptionData"
import { PLANS } from '../../data/subscriptionData'

const initialState: TSubscriptionState = {
  step: 1,
  userInfo: initialUserInfo,
  period: "mo",
  selectedPlan: PLANS[0],
  selectedAddons: [],
  totalPrice: 0
}

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setUserInfo: (state, action: PayloadAction<TUserInfo>) => {
      state.userInfo = action.payload
    },
    setSelectedPlan: (state, action: PayloadAction<TPlan>) => {
      state.selectedPlan = action.payload
    },
    togglePeriod: (state) => {
      state.period = state.period === "mo" ? "yr" : "mo"
    },
    setSelectedAddons: (state, action: PayloadAction<TAddons[]>) => {
      state.selectedAddons = action.payload
    },
    calculateTotalPrice: (state) => {
      const multiplier = state.period === "mo" ? 1 : 10
      const addonsPrice = state.selectedAddons.reduce((acc, addon) => acc + addon.price, 0)
      state.totalPrice = (state.selectedPlan.price + addonsPrice) * multiplier
    }
  }
})

export const {
  changeStep,
  setUserInfo,
  setSelectedPlan,
  togglePeriod,
  setSelectedAddons,
  calculateTotalPrice
} = subscriptionSlice.actions

export default subscriptionSlice.reducer