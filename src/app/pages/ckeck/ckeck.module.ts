import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CkeckPageRoutingModule } from './ckeck-routing.module';

import { CkeckPage } from './ckeck.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CkeckPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CkeckPage]
})
export class CkeckPageModule {}
