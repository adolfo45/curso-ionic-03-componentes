import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoppopoverPage } from './poppopover.page';

const routes: Routes = [
  {
    path: '',
    component: PoppopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoppopoverPageRoutingModule {}
