import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  todoList: any[] = [];
  localList = JSON.parse(localStorage.getItem('user-Todo') || '[]');
  SubmitTask(data: string) {
    this.todoList.push({ id: this.todoList.length, name: data });
    localStorage.setItem('user-Todo', JSON.stringify(this.todoList));
    console.log(this.todoList);
  }
  removeTodo(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}