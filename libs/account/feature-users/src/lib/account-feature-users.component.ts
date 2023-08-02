import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './+store/auth.service';
import { AuthForm } from './AuthForm';

@Component({
  selector: 'user-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  form = new AuthForm();

  ngOnInit() {
    console.log(this.authService);
  }

  onSubmit() {
    this.authService.signIn(this.form.value)
      .subscribe(console.log)

    // this.httpClient.post('/api/users', this.form.value).subscribe(console.log);
  }
}
