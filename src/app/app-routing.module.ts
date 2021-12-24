import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceStationComponent } from './components/space-station/space-station.component';


const routes: Routes = [{
  path: '**',
  component: SpaceStationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
