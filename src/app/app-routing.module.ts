import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { DistinctUntilChangedComponent } from './components/distinct-until-changed/distinct-until-changed.component';
import { TakeComponent } from './components/take/take.component';
import { FirstComponent } from './components/first/first.component';
import { SkipComponent } from './components/skip/skip.component';

const routes: Routes = [
  {path: '', component: SkipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
