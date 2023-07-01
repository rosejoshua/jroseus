import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  wrapperDivClass: string;
  wrapperDivClassShow: string;
  wrapperDivClassHide: string;
  constructor() {
    this.wrapperDivClassHide = 'flex flex-wrap transition duration-300 opacity-0';
    this.wrapperDivClassShow = 'flex flex-wrap transition duration-300 opacity-100';
    this.wrapperDivClass = this.wrapperDivClassHide;
   }

  ngOnInit(): void {
   this.showDiv(); 
  }

  showDiv(): void {
    setTimeout(() => {
      this.wrapperDivClass = this.wrapperDivClassShow;
    }, 300);
  }

}
