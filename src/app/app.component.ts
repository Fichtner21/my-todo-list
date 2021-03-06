import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Task } from './task.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode: false;
  taskName = 'Sugerowane zdanie codzienne: odkurzanie';
  taskDate = '';
  tasks: Task[] = [
    {
      name: 'Karmienie',
      deadline: '2020-03-15',
      done: false,
    },
    {
      name: 'Przewijanie',
      deadline: '2020-03-16',
      done: true,
    },
    {
      name: 'Sprzątanie',
      deadline: '2020-03-17',
      done: false,
    }
  ];

  title = 'Lista Zadań';
  someDate = Date.now();
  // words = ['jeden', 'dwa', 'trzy', 'cztery'];
  // num = 8.7252456363;
  // translate = {
  //   zima: 'winter',
  //   wiosna: 'spring',
  //   jesień: 'autumn',
  //   lato: 'summer',
  // };
  // price: 2.99;

  config: { [key: string]: string | Date} = null;
  dog: {[key: string]: string | number | object} = null;
  constructor(){
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: ' © Lista zadań zbudowana w Angularze',
        date: new Date().toDateString(),
      };
      // this.dog = {
      //   name: 'Lesi',
      //   liczba: {
      //     pierwsza: 1,
      //     druga: 2,
      //     trzecia: 3,
      //   },
      // };
    }, 1000);  
    this.sortTasks();   
  }

  clearTasks(){
    this.tasks = [];
  }

  // zczytywanie tego co jest aktualnie pisane w inpucie
  // onKeyUp(event: KeyboardEvent){
  //   const target = event.target as HTMLInputElement;
  //   this.taskName = target.value;
  //   //console.log(target.value);
  // }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    }; 
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';  
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }

  // get footer(): string {
  //   return ' © Lista zadań, All rights reserved.';
  // }

  // getDate(): Date {
  //   return new Date();
  // }

  // constructor(@Inject(LOCALE_ID) private localeId: string){
  //   console.log('Locale: ', this.localeId);
  // }
}
