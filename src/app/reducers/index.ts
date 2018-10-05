import {createSelector} from '@ngrx/store';
import * as fromLayout from './layout';

export interface IAppState {
  layout: fromLayout.State;
}

export const rootReducer = {
  layout: fromLayout.reducer
};

/**
 * Layout Reducers
 */
export const getLayoutState = (state: IAppState) => state.layout;

export const getShowSidebar = createSelector(getLayoutState, fromLayout.getShowSidebar);
