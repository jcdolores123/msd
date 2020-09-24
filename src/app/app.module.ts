import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './pages/documents/documents.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { TextBlastComponent } from './pages/text-blast/text-blast.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpModule } from '@angular/http';
import { SeminarComponent } from './pages/seminar/seminar.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentsComponent,
    FileUploadComponent,
    TextBlastComponent,
    HomePageComponent,
    SeminarComponent,
    PromotionComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
