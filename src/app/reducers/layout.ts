import * as layout from '../actions/layout';

export interface State {
  showSidebar: boolean;
}

export const initialState: State = {
  showSidebar: true
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.OPEN_SIDEBAR:
      return {
        showSidebar: true
      };

    case layout.CLOSE_SIDEBAR:
      return {
        showSidebar: false
      };

    default:
      return state;
  }
}

export const getShowSidebar = (state: State) => state.showSidebar;
