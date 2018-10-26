import { Component, EventEmitter, Input, OnChanges, SimpleChange, Output} from '@angular/core';


@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnChanges {
  @Input() magicPoint: number;
  @Input() powerPoint: number;
  @Input() totalPoint: number;
  @Output() pointDown = new EventEmitter<boolean>();

  @Input() magicCheck: boolean;
  @Input() powerCheck: boolean;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {  }

  magicDown() {
    this.pointDown.emit(true);
  }
  powerDown() {
    this.pointDown.emit(false);
  }

}
