import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { storeFeatureProductsRoutes } from './store-feature-products.routes';
import { StoreFeatueProductsComponent } from './store-featue-products.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storeFeatureProductsRoutes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [StoreFeatueProductsComponent],
})
export class StoreFeatureProductsModule {}
