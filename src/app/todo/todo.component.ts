import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks = [
    { title: '牛乳を買う', done: false, deadline: new Date('2023-09-01') },
    { title: '可燃ゴミを出す', done: true, deadline: new Date('2023-08-02') },
    { title: '銀行に行く', done: false, deadline: new Date('2023-06-03') },
  ];

  newTask = {
    title: '',
    deadline: new Date(),
  };

  ngOnInit(): void {}

  addTask() {
    this.tasks.push({
      title: this.newTask.title,
      done: false,
      deadline: new Date(this.newTask.deadline),
    });
    this.newTask = {
      title: '',
      deadline: new Date(),
    };
  }

  isOverdue(task : any) {
    return !task.done && task.deadline < new Date().setHours(0, 0, 0, 0);
  }
}
