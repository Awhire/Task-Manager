import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

const routes: Routes = [
  {path: "", component: TaskListComponent},
  {path: "edit/:id", component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
