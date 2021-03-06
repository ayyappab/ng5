import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

itemCount:number;
btnText: string = 'Add Item into Bucket';
goalText: string = "";
goals = [];
index: number;

  constructor() { }

  ngOnInit() {
  this.itemCount = this.goals.length;
  }
  
  addItem() {
  this.goals.push(this.goalText);
  this.goalText = "";
  this.itemCount++;
  }
  
  removeItem(index) {
  console.log(index);
    this.goals.splice(index, 1);
    this.itemCount--;
  }

}
