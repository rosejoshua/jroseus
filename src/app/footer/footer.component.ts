import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  opac0Style: string;
  opac100Style: string;
  logoWrapper: string;

  constructor() {
    this.opac0Style = 'transition duration-300 opacity-0 flex flex-col justify-between space-y-8 md:space-y-0 items-center md:items-end';
    this.opac100Style = 'transition duration-300 opacity-100 flex flex-col justify-between space-y-8 md:space-y-0 items-center md:items-end';
    this.logoWrapper = this.opac0Style;
  }

  ngOnInit(): void {
  }

  fadeInLogo(): void {
      this.logoWrapper = this.opac100Style;
  }

  currentYear = new Date().getFullYear();
}
