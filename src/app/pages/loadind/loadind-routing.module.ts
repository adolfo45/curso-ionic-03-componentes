import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadindPage } from './loadind.page';

const routes: Routes = [
  {
    path: '',
    component: LoadindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadindPageRoutingModule {}
