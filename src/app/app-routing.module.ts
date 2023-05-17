import { NgModule } from '@angular/core';
import { ProductsComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cart',
        loadChildren: () => import('./modules/carts/cart.module').then((m) => m.CartModule),
    },
    { path: '**', component: ProductsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
