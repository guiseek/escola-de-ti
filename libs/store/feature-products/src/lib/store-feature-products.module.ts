import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { Mat Module } from '@angular/material/';
// import { Mat Module } from '@angular/material/';

import { ReactiveFormsModule } from '@angular/forms';
import { storeFeatureProductsRoutes } from './store-feature-products.routes';
import { StoreFeatueProductsComponent } from './store-featue-products.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(storeFeatureProductsRoutes),
  ],
  declarations: [StoreFeatueProductsComponent],
})
export class StoreFeatureProductsModule {}
