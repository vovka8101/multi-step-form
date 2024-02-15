import { useState } from "react"

export const usePersonalInfo = <T>(value: T) => {
  const error = value ? "" : "This field is required"

  return useState({ error, value })
}