import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  tasksToDo: string[] = [];
  tasksDone: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasksToDo.push(this.newTask);
      this.newTask = '';
    }
  }

  markAsDone(index: number) {
    const task = this.tasksToDo[index];
    this.tasksDone.push(task);
    this.tasksToDo.splice(index, 1);
  }

  removeTask(index: number) {
    this.tasksToDo.splice(index, 1);
  }
}
