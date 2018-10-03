import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ButtonBarService} from '../button-bar/button-bar.service';
import {AppStates} from '../app.states';
import {IButtonBarEvent} from '../button-bar/button-bar.event.interface';

@Component({
  selector: './app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  content = '';

  @Input()
  styleType = '';

  @Input()
  listen = '';

  lastAction = '';

  constructor(
    private buttonBarService: ButtonBarService
  ) {
    this.buttonBarService.addConfiguration(AppStates.COMPONENT_BUTTON_BAR_CONFIG_DEFAULT);
    this.buttonBarService.addConfiguration(AppStates.COMPONENT_BUTTON_BAR_CONFIG_BRANCH);
  }

  ngOnInit() {

    this.buttonBarService.persistEmitter.subscribe(event => {

      event = <IButtonBarEvent>event;

      /**
       * when listen for this component is set, only listen to events with the given source name
       */
      if (this.listen === event.source) {
        console.log('received persist event', event);
        this.lastAction = event.value;
      } else if (!this.listen) {
        console.log('received persist event', event);
        this.lastAction = event.value;
      }
    });

    this.buttonBarService.cancelEmitter.subscribe(event => {

      event = <IButtonBarEvent>event;

      /**
       * when listen for this component is set, only listen to events with the given source name
       */
      if (this.listen === event.source) {
        console.log('received cancel event', event);
        this.lastAction = 'cancel';
      } else if (!this.listen) {
        console.log('received cancel event', event);
        this.lastAction = 'cancel';
      }
    });
  }

}
