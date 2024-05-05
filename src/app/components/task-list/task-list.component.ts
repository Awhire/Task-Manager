import { Component } from '@angular/core';
import { Task } from 'src/app/interface/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = []

  title: string | undefined;
  description: string | undefined;
  dueDate: string | undefined ;
  isLoading: boolean | undefined

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  onSubmit() {

    this.isLoading = true

    if(!this.title) {
      alert('Please add title!')
      return
    }

    const newTask: any = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate
    }

    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task))

    this.title = '';
    this.description = '';
    this.dueDate = '';

    setTimeout(() => {
      alert('Added Successfully')   
    }, 500);

    this.isLoading = false
  }

  onDelete(task: any) {
    console.log(task.id)

    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)))
  }
}


