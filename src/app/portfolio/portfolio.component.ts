import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  imgArr: Array <{ nameStr: string, altStr: string, width: number, height: number }>;
  photoClass: Array<{ imgStyles: string, spinnerStyles: string}>;
  photoClassShow: string;
  photoClassHide: string;
  modalClass: string;
  modalClassShow: string;
  modalClassHide: string;
  modalBackgroundClass: string;
  modalBackgroundClassOpac75: string;
  modalBackgroundClassOpac0: string;
  modalImgClass: string;
  modalImgClassShow: string;
  modalImgClassHide: string;
  modalImgSrc: string;
  modalImgAlt: string;
  divClass: string;
  spinAndImgHolderDivClass: string;
  spinnerHolderClassShow: string;
  spinnerHolderClassHide: string;
  constructor(private photoService: PhotoService) {
    this.imgArr = photoService.getImgArrPortfolio();
    
    this.photoClassHide = 'transition duration-300 z-10 hover:scale-[102%] opacity-0';
    this.photoClassShow = 'transition duration-300 z-10 hover:scale-[102%] opacity-100';
    this.spinnerHolderClassShow = 'transition duration-300 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-100';
    this.spinnerHolderClassHide = 'transition duration-300 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-0';
    this.photoClass = new Array(photoService.getImgArrPortfolio.length);
    for (let i in photoService.getImgArrPortfolio()) {
      this.photoClass[i] = {
        imgStyles: this.photoClassHide, 
        spinnerStyles:this.spinnerHolderClassShow,
      };
    }
    this.modalClassShow = 'relative z-30 visible';
    this.modalClassHide = 'relative z-30 hidden';
    this.modalClass = this.modalClassHide;
    this.modalBackgroundClassOpac75 = 'transition duration-700 fixed inset-0 bg-gray-500 bg-opacity-75';
    this.modalBackgroundClassOpac0 = 'transition duration-700 fixed inset-0 bg-gray-500 bg-opacity-0';
    this.modalBackgroundClass = this.modalBackgroundClassOpac0;
    this.modalImgClassHide = 'transition duration-700 object-contain min-h-[300px] opacity-0';
    this.modalImgClassShow = 'transition duration-700 object-contain min-h-[300px] opacity-100';
    this.modalImgClass = this.modalImgClassHide;
    this.divClass = 'transition mb-0 pb-20 w-full px-5 md:px-12 lg:px-32 pt-2 pb-10 mx-auto gap-5 columns-2 xl:columns-3 space-y-5';
    this.spinAndImgHolderDivClass = 'relative items-center block';
    this.modalImgSrc = this.imgArr[0].nameStr;
    this.modalImgAlt = this.imgArr[0].altStr;
  }

  ngOnInit(): void {
    this.modalClass = this.modalClassHide;
    this.modalImgClass = this.modalImgClassHide;
    this.modalBackgroundClass = this.modalBackgroundClassOpac0;
  }

  clickImg(i:any): void {
    this.modalImgSrc = this.imgArr[i].nameStr;
    this.modalImgAlt = this.imgArr[i].altStr;
    this.modalClass = this.modalClassShow;
    setTimeout(() => {
      this.modalBackgroundClass = this.modalBackgroundClassOpac75;
      this.modalImgClass = this.modalImgClassShow;
    }, 200);
  }

  closeModal(): void {
    this.modalImgClass = this.modalImgClassHide;
    this.modalBackgroundClass = this.modalBackgroundClassOpac0;
    setTimeout(() => {
      this.modalClass = this.modalClassHide;
    }, 500);
  }

  initImgHide(i:number): void {

  }

  showImg(i:number): void {
    setTimeout(() => {
      this.photoClass[i].spinnerStyles = this.spinnerHolderClassHide;
      this.photoClass[i].imgStyles = this.photoClassShow;
    }, 300);
  }

}