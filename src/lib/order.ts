export type CheckoutForm = { name: string; email: string; address: string }
export type ValidationResult = {
  valid: boolean
  errors: Partial<Record<keyof CheckoutForm, string>>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateCheckout(form: CheckoutForm): ValidationResult {
  const errors: ValidationResult['errors'] = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL.test(form.email.trim())) errors.email = 'Please enter a valid email.'
  if (!form.address.trim()) errors.address = 'Please enter a delivery address.'
  return { valid: Object.keys(errors).length === 0, errors }
}
