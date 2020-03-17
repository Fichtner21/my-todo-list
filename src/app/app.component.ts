import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Task } from './task.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string;
  tasks: Task[] = [
    {
      name: 'Karmienie',
      deadline: '2020-03-15',
      done: false,
    },
    {
      name: 'Przewijanie',
      deadline: '2020-03-16',
      done: false,
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
  }

  clearTasks(){
    this.tasks = [];
  }

  // zczytywanie tego co jest aktualnie pisane w inpucie
  onKeyUp(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
    //console.log(target.value);
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: '2020-03-18',
      done: false,
    }; 
    this.tasks.push(task);  
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
