import { Component, OnInit, Input } from '@angular/core';
import { Festival } from 'src/models/festival';

@Component({
  selector: 'app-festivals-list',
  templateUrl: './festivals-list.component.html',
  styleUrls: ['./festivals-list.component.css']
})
export class FestivalsListComponent implements OnInit {
  @Input() festivals: {name:string,tables:number,price:number}[];

  constructor() {
    this.festivals = []
  }

  ngOnInit(): void {
    
  }

}
