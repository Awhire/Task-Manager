import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interface/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  task!: Task
  
  
  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService){}
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    this.taskService.getSingleTask(id).subscribe(task => this.task = task)            
  }

  
  update() {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(updatedTask => {
        alert('Task updated successfully');
        this.router.navigate(['/']); // Navigate to the tasks page after update
      }, error => {
        alert('Error updating task');
      });
    }
  }

}
