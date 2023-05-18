import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSelectModule } from '@angular/material/select';
import { cartReducer } from './redux/reducers/cart.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { productReducer } from './redux/reducers/product.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent, LayoutComponent, ProductItemComponent, ProductsComponent } from './components';

@NgModule({
    declarations: [AppComponent, LayoutComponent, ProductsComponent, ProductItemComponent, FilterComponent],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        MatSelectModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
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
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
