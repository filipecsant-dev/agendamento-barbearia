import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  @Input()
  service!: String;
  @Input()
  value!: number;
  @Input()
  img!: String;


  constructor() { }

  ngOnInit(): void {
  }

}
