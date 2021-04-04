import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { MainComponent } from './components/main/main.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GithubComponent } from './components/github/github.component';
import { UiModalComponent } from './components/ui-modal/ui-modal.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UiHeaderComponent,
    MainComponent,
    UiFooterComponent,
    UiModalComponent,
    ServicesComponent,
    ContactsComponent,
    InfoComponent,
    ProjectsComponent,
    GithubComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
