import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadindPageRoutingModule } from './loadind-routing.module';

import { LoadindPage } from './loadind.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadindPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoadindPage]
})
export class LoadindPageModule {}
