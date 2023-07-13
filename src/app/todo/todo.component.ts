import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [
    { title: '牛乳を買う', done: false, deadline: new Date('2023-09-01') },
    { title: '可燃ゴミを出す', done: true, deadline: new Date('2023-08-02') },
    { title: '銀行に行く', done: false, deadline: new Date('2023-06-03') },
  ];

  ngOnInit(): void {}

  addTask(task : Task) {
    this.tasks.push(task);
  }
}
