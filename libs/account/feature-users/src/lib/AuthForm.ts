import { FormControl, FormGroup } from '@angular/forms';


export class AuthForm extends FormGroup {
  constructor() {
    super({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
