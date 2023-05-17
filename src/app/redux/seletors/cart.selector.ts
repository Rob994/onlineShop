import { State } from '../state';
import { cartNode } from '../reducers/cart.reducer';
import { CartProduct } from '../../models/product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCartFeature = createFeatureSelector<State>(cartNode);

export const selectCart = createSelector(selectCartFeature, (state: State): CartProduct[] => state.cart);
