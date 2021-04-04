import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GithubComponent } from './components/github/github.component';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'info', component: InfoComponent},
  {path: 'github', component: GithubComponent},
  {path: 'admin', component: AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
