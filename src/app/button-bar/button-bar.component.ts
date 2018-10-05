import {Component, Input, OnInit} from '@angular/core';
import {ButtonBarService} from './button-bar.service';
import {AppReducer} from '../app.reducer';
import {select, Store} from '@ngrx/store';
import {getShowSidebar, IAppState} from '../reducers';
import {CloseSideBarAction, OpenSideBarAction} from '../actions/layout';
import {Observable} from 'rxjs';

@Component({
  selector: './app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  @Input()
  private configName = '';

  private config: any = {};
  private showSidebar$: Observable<boolean>;

  constructor(
    private buttonActionService: ButtonBarService,
    private store: Store<IAppState>
  ) {
    this.showSidebar$ = this.store.pipe(select(getShowSidebar));
  }

  ngOnInit() {

    if (this.configName != null) {
      this.config = this.buttonActionService.getConfiguration(AppReducer.BUTTON_BAR(this.configName));
    }
  }

  persist(action) {
    this.buttonActionService.persist(this.configName, action);
  }

  cancel() {
    this.buttonActionService.cancel(this.configName);
  }

  showSidebar() {
    this.store.dispatch(new OpenSideBarAction());
  }

  closeSidebar() {
    this.store.dispatch(new CloseSideBarAction());
  }

}
