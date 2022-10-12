import { Component } from '@angular/core';
import { Festival } from './models/festival';
import { FestivalsListComponent } from './components/festival/festivals-list/festivals-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FestivalApp';
  festivals: {name:string,tables:number,price:number}[] = [];

  ngOnInit() {
    this.festivals = [
      {
        name:"WoodStock",
        tables:34,
        price:23
      },
      {
        name:"Les vieilles charrues",
        tables:85,
        price:34
      },
      {
        name:"Tommorowland",
        tables:54,
        price:27
      }
    ];
  }
}
