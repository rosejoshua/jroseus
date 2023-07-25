import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opac0Style: string;
  opac100Style: string;
  logoWrapper1: string;
  logoWrapper2: string;

  constructor() {
    this.opac0Style = 'transition duration-300 opacity-0';
    this.opac100Style = 'transition duration-300 opacity-100';
    this.logoWrapper1 = this.opac0Style;
    this.logoWrapper2 = this.opac0Style;
  }

  ngOnInit(): void {
  }

  fadeIn(i:number): void {
    if (i==1) {
      this.logoWrapper1 = this.opac100Style;
    }
    else if (i==2) {
      this.logoWrapper2 = this.opac100Style;
    }
  }

}
