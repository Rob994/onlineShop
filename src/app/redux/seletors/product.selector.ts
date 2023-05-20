import { State } from '../state';
import { Product } from '../../models';
import { productNode } from '../reducers/product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectProductFeature = createFeatureSelector<State>(productNode);

export const selectProduct = createSelector(selectProductFeature, (state: State): Product[] => state.products);
