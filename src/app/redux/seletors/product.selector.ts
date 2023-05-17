import { Product } from '../../models/product.model';
import { productNode } from '../reducers/product.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../state';

const selectProductFeature = createFeatureSelector<State>(productNode);

export const selectProduct = createSelector(selectProductFeature, (state: State): Product[] => state.products);
