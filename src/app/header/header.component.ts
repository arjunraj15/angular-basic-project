import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() display1 =new EventEmitter <string>();
  constructor() { }

  ngOnInit() {
  }
  onclick(show:string)
  {
    this.display1.emit(show);

  }

}