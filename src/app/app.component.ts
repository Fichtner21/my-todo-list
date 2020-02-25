import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Zadań';

  get footer(): string {
    return ' © Lista zadań, All rights reserved.';
  }

  getDate(): Date {
    return new Date();
  }

  constructor(@Inject(LOCALE_ID) private localeId: string){
    console.log('Locale: ', this.localeId);
  }
}
