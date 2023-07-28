import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class AuthForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}

@Component({
  selector: 'user-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent {
  httpClient = inject(HttpClient);

  form = new AuthForm();
  onSubmit() {
    this.httpClient.post('/api/users', this.form.value).subscribe(console.log);
  }
}
