import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnePageRoutingModule } from './une-routing.module';

import { UnePage } from './une.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnePageRoutingModule
  ],
  declarations: [UnePage]
})
export class UnePageModule {}
