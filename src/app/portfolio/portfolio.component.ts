import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imgArr: Array <{ nameStr: string, altStr: string, width: number, height: number }>;
  photoClass: string;
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
  constructor(private photoService: PhotoService) {
    this.imgArr = photoService.getImgArr();
    
    this.photoClassHide = 'transition duration-300 hover:scale-[102%] invisible opacity-0';
    this.photoClassShow = 'transition duration-300 hover:scale-[102%] visible opacity-100';
    this.photoClass = this.photoClassHide;
    this.modalClassShow = 'relative z-10 visible';
    this.modalClassHide = 'relative z-10 hidden';
    this.modalClass = this.modalClassHide;
    this.modalBackgroundClassOpac75 = 'transition duration-700 fixed inset-0 bg-gray-500 bg-opacity-75';
    this.modalBackgroundClassOpac0 = 'transition duration-700 fixed inset-0 bg-gray-500 bg-opacity-0';
    this.modalBackgroundClass = this.modalBackgroundClassOpac0;
    this.modalImgClassHide = 'transition duration-700 object-contain min-h-[300px] opacity-0';
    this.modalImgClassShow = 'transition duration-700 object-contain min-h-[300px] opacity-100';
    this.modalImgClass = this.modalImgClassHide;
    this.divClass = 'transition mb-0 pb-20 w-full px-5 md:px-12 lg:px-32 pt-2 pb-10 mx-auto gap-5 columns-2 xl:columns-3 space-y-5';
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

  showImg(): void {
    setTimeout(() => {
      this.photoClass = this.photoClassShow;
    }, 300);
  }

}