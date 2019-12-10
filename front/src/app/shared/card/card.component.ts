import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;

  contentID =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  constructor() { }

  ngOnInit() {
  }

}
