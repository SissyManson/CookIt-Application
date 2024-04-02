import { ValidatorFn } from '@angular/forms';

export function matchPassValidator(
  passControlName: string,
  rePassControlName: string
): ValidatorFn {
  return (control) => {
    const passFormControl = control.get(passControlName);
    const rePassFormControl = control.get(rePassControlName);
    const isMatch = passFormControl?.value == rePassFormControl?.value;

    return isMatch ? null : { matchPassValidator: true };
  };
}
