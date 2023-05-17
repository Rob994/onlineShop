import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './components';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    declarations: [CartComponent, CartItemComponent],
    imports: [CommonModule, CartRoutingModule],
    bootstrap: [CartComponent],
})
export class CartModule {}
