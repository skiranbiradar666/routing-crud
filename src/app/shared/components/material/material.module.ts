import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matArr  = [MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatProgressSpinnerModule ]

@NgModule({
  declarations: [],
  imports: [...matArr,
    CommonModule
  ],
  exports : [...matArr]
})
export class MaterialModule { }
