import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceStationComponent } from './components/space-station/space-station.component';

import localeHe from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';
import { NotesDialogComponent } from './components/notes-dialog/notes-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeHe);

@NgModule({
  declarations: [
    AppComponent,
    SpaceStationComponent,
    NotesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule   
  ],
  entryComponents: [
    NotesDialogComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{ provide: LOCALE_ID, useValue: 'he-IL' },
  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
