import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cartReducer } from './redux/reducers/cart.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { productReducer } from './redux/reducers/product.reducer';
import { LayoutComponent, ProductItemComponent, ProductsComponent } from './components';

@NgModule({
    declarations: [AppComponent, LayoutComponent, ProductsComponent, ProductItemComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot(
            {
                cart: cartReducer as any,
                products: productReducer as any,
            },
            {}
        ),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
