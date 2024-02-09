export const checkInput = (value: string, type: string) => {
  let err = ""
  const emailRegx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  const phoneRegx = /^(\+\d{1,3}\s?)?(\d{3}\s?|\(\d{3}\)\s?)?[\d\- ]{9,12}$/

  switch (type) {
    case "name":
      if (value.length < 4) {
        err = "Name is too short"
      } else if (value.length > 50) {
        err = "Name is too long"
      }
      break
    case "email":
      if (!emailRegx.test(value)) {
        err = "Invalid email address"
      }
      break
    case "phone":
      if (!phoneRegx.test(value)) {
        err = "Invalid phone number"
      }
      break
    default:
      err = "Some error occured"
      break
  }

  if (value.length === 0) {
    err = "This field is required"
  }

  return err
}
