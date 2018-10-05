import {Action} from '@ngrx/store';

export const OPEN_SIDEBAR = '[Layout] Open Sidebar';
export const CLOSE_SIDEBAR = '[Layout] Close Sidebar';

export class OpenSideBarAction implements Action {
  readonly type = OPEN_SIDEBAR;
}

export class CloseSideBarAction implements Action {
  readonly type = CLOSE_SIDEBAR;
}

export type Actions
  = OpenSideBarAction
  | CloseSideBarAction;
