import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

let commonModule = [
  MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbar ,
    MatMenuModule ,
    MatCardModule
]
@NgModule({
  declarations: [],
  imports: commonModule,
  exports: commonModule
})
export class MaterialModule { }
