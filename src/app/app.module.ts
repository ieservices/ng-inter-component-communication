import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ButtonBarComponent} from './button-bar/button-bar.component';
import {ButtonBarService} from './button-bar/button-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ButtonBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
