import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'products',
        loadComponent: () =>
            import('@nx-monorepo-app/products').then((m) => m.ProductsComponent),
    },
    {
        path: 'orders',
        loadComponent: () =>
            import('@nx-monorepo-app/orders').then((m) => m.OrdersComponent),
    },
];
