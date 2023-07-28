import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accountFeatureUsersRoutes } from './lib.routes';
import { AccountFeatureUsersComponent } from './account-feature-users.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountFeatureUsersRoutes),
  ],
  declarations: [AccountFeatureUsersComponent],
})
export class AccountFeatureUsersModule {}
