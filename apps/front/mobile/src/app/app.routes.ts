import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@praticando-monorepo/account/feature-users').then(
        (m) => m.AccountFeatureUsersModule
      ),
  },
];
