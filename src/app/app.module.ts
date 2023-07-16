import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { DistinctUntilChangedComponent } from './components/distinct-until-changed/distinct-until-changed.component';
import { TakeComponent } from './components/take/take.component';
import { FirstComponent } from './components/first/first.component';
import { SkipComponent } from './components/skip/skip.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceTimeComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    DistinctUntilChangedComponent,
    TakeComponent,
    FirstComponent,
    SkipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
