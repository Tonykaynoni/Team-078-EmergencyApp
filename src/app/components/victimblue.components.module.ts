import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VictimblueMenuComponent } from '../components/victimblue-menu/victimblue-menu.component'

@NgModule({
  declarations: [VictimblueMenuComponent],
  exports: [VictimblueMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  
})
export class VictimBlueMenuModule {}