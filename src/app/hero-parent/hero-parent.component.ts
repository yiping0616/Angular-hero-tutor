import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {
  magic = 1;
  power = 20;
  point = 5;
  magicCheck = false;
  powerCheck = false;

  addMagic() {
    if (this.magicCheck) {
      this.magicCheck = false;
    }
    this.magic++;
    this.point--;
  }

  addPower() {
    if (this.powerCheck) {
      this.powerCheck = false;
    }
    this.power++;
    this.point--;
  }

  levelUp() {
    this.point++;
  }
  pointDown(magic: boolean) {
    console.log('poinDown');
    magic ? this.magic-- : this.power--;
    this.point++;
    if (this.magic === 0) {
      this.magicCheck = true;
    }
    if (this.power === 0) {
      this.powerCheck = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
