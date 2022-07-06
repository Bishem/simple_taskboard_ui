import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatBadgeModule
  ]
})

export class MaterialModule {
}
