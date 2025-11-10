import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hilight } from './directives/hilight';
import { TranscatePipe } from './pipes/transcate-pipe';
import { Todo } from './servises/todo';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test implements OnInit {

  newTask: string = '';
  tasks: string[] = [];

  constructor() { }

  private todoService = inject(Todo);

  ngOnInit() {
    this.tasks = this.todoService.getTask();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.todoService.getTask();
  }
}


function removeTask(index: any, number: any) {
  throw new Error('Function not implemented.');
}

