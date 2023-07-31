import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@escola-de-ti/store/feature-products').then(
        (m) => m.StoreFeatureProductsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@escola-de-ti/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  },
];
