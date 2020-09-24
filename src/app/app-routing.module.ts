import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DocumentsComponent } from './pages/documents/documents.component'
import { FileUploadComponent } from './pages/file-upload/file-upload.component'
import { TextBlastComponent } from './pages/text-blast/text-blast.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { SeminarComponent } from './pages/seminar/seminar.component'


const routes: Routes = [
    { path: 'text-blast', component: TextBlastComponent },
    { path: 'file-upload', component: FileUploadComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'seminar', component: SeminarComponent },
    { path: '', component: HomePageComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }