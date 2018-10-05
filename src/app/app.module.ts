import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ButtonBarComponent} from './button-bar/button-bar.component';
import {ButtonBarService} from './button-bar/button-bar.service';

import {rootReducer} from './reducers';
import {NgReduxModule} from '@angular-redux/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states,
    }),
  ],
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonBarComponent
  ],
  providers: [
    ButtonBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
