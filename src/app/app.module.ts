import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentRowComponent } from './documents-list/document-row/document-row.component';
import { MdiconComponent } from './mdicon/mdicon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DocumentsListComponent,
    DocumentRowComponent,
    MdiconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
