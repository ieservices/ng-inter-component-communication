import {Injectable, Output, EventEmitter} from '@angular/core';
import {AppStates} from '../app.states';
import {IButtonBarConfiguration} from './button-bar.configuration.interface';
import {IButtonBarEvent} from './button-bar.event.interface';

@Injectable()
export class ButtonBarService {

  config = {};

  @Output() persistEmitter: EventEmitter<IButtonBarEvent> = new EventEmitter();
  @Output() cancelEmitter: EventEmitter<IButtonBarEvent> = new EventEmitter();

  addConfiguration(config: IButtonBarConfiguration) {
    this.config[config.name] = config.config;
  }

  getConfiguration(config: IButtonBarConfiguration) {
    if (this.config.hasOwnProperty(config.name)) {
      return this.config[config.name];
    }

    return AppStates.COMPONENT_BUTTON_BAR_CONFIG_DEFAULT;
  }

  persist(sourceName, action) {
    this.persistEmitter.emit({source: sourceName, value: action});
  }

  cancel(sourceName) {
    this.cancelEmitter.emit({source: sourceName, value: null});
  }

}
