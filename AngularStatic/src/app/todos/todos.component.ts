import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

    persons=[
      {  "company":"ABC", "contact":"123", "country":"India" },
      {  "company":"BCD",  "contact":"233", "country":"Pak" },
     {  "company":"CDE",   "contact":"345", "country":"China" }
    ];
  constructor() { }

  ngOnInit() {
  }

}
