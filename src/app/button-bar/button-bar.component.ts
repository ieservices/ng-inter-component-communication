import {Component, Input, OnInit} from '@angular/core';
import {ButtonBarService} from './button-bar.service';
import {AppReducer} from '../app.reducer';

@Component({
  selector: './app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  @Input()
  private configName = '';

  private config: any = {};

  constructor(
    private buttonActionService: ButtonBarService
  ) {
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
}
