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
  spinnerStyleHide: string;
  spinnerStyleShow: string;
  imgStyleHide: string;
  imgStyleShow: string;
  imgStyle: string;
  spinnerStyle: string;
  spinnerAndImgHolderStyle: string;
  constructor() {
    this.wrapperDivClassHide = 'flex flex-wrap transition duration-300 opacity-0 xl:pt-12 lg:pt-10';
    this.wrapperDivClassShow = 'flex flex-wrap transition duration-300 opacity-100 xl:pt-12 lg:pt-10';
    this.wrapperDivClass = this.wrapperDivClassHide;
    this.spinnerStyleHide = 'transition duration-300 absolute z-0 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-0';
    this.spinnerStyleShow = 'transition duration-300 absolute z-0 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-100';
    this.spinnerStyle = this.spinnerStyleShow;
    this.imgStyleHide = 'transition duration-300 opacity-0 xl:w-96 lg:w-80 md:w-72 sm:w-56 w-36 rounded-lg';
    this.imgStyleShow = 'transition duration-300 opacity-100 xl:w-96 lg:w-80 md:w-72 sm:w-56 w-36 rounded-lg';
    this.imgStyle = this.imgStyleHide;
    this.spinnerAndImgHolderStyle = 'relative items-center block';
   }

  ngOnInit(): void {
   this.showDiv(); 
  }
  
  swapSpinnerWithImage() {
    this.spinnerStyle = this.spinnerStyleHide;
    this.imgStyle = this.imgStyleShow;
  }

  showDiv(): void {
    setTimeout(() => {
      this.wrapperDivClass = this.wrapperDivClassShow;
    }, 300);
  }

}
