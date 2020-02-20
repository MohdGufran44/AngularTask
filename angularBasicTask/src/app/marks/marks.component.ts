import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  
  @Input() public parentData;

  constructor() { }

  ngOnInit() {
    console.log(this.parentData);
  }

}
