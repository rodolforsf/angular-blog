import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-card',
  templateUrl: './other-card.component.html',
  styleUrls: ['./other-card.component.css', './other-card.responsive.component.css']
})
export class OtherCardComponent {

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  Id: string = "0"

  constructor() { }

  ngOnInit(): void {

  }
}
