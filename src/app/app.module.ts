import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCodemirrorModule } from './mat-codemirror/mat-codemirror.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MatCardModule,
    MatInputModule,MatButtonModule,

    MatCodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
