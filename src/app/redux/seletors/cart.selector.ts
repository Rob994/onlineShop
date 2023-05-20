import { State } from '../state';
import { CartProduct } from '../../models';
import { cartNode } from '../reducers/cart.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCartFeature = createFeatureSelector<State>(cartNode);

export const selectCart = createSelector(selectCartFeature, (state: State): CartProduct[] => state.cart);
