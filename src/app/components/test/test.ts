import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hilight } from './directives/hilight';
import { TranscatePipe } from './pipes/transcate-pipe';
import { Todo } from './servises/todo';
import { AbstractControl, FormControl, FormGroup,  ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class TexstComponent {



  //кастомний валідатор для віку
  ageValitador(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValidage = value >= 18 && value <= 120;
    return isValidage ? null : { ageInvalid: 'Age must be beetwen 18 and 120' };
  }

  complexForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, this.ageValitador]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    consent: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    console.log('Form value', this.complexForm.value);
    console.log('Form status - is valid:', this.complexForm.valid);
    console.log('Form controls:', this.complexForm.controls);
  }

    get name() {
  return this.complexForm.get('name');
}

get email() {
  return this.complexForm.get('email');
}

get age() {
  return this.complexForm.get('age');
}

get password() {
  return this.complexForm.get('password');
}

get consent() {
  return this.complexForm.get('consent');
}
}
//export class Test implements OnInit {

 // newTask: string = '';
 // tasks: string[] = [];

 // constructor() { }

 // private todoService = inject(Todo);

 // ngOnInit() {
 //   this.tasks = this.todoService.getTask();
  //}

 // addTask() {
   // if (this.newTask.trim() !== '') {
   //   this.todoService.addTask(this.newTask.trim());
   //   this.newTask = '';
  //    this.updateTasks();
  //  }
  //}

 // removeTask(index: number) {
 //   this.todoService.removeTask(index);
  //  this.updateTasks();
 // }

 // private updateTasks() {
  //  this.tasks = this.todoService.getTask();
 // }
//}


//function removeTask(index: any, number: any) {
 // throw new Error('Function not implemented.');
//}

