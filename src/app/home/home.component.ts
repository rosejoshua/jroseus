import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeoutInfo } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgArrHome: Array <{ nameStr: string, altStr: string, width: number, height: number }>;
  idxPhotoLoaded: boolean[];
  photoClassOpac100: string;
  photoClassOpac0: string;
  photoClassHide: string;
  photoClass: string;
  activeImg: number;
  timeoutId: NodeJS.Timeout;
  imgShowDuration: number;
  spinAndImgHolderDivClass: string;
  spinnerHolderClassShow: string;
  spinnerHolderClassHide: string;
  spinnerClass: string;

  constructor(route:ActivatedRoute, private photoService: PhotoService) {
    
    this.imgArrHome = this.photoService.getImgArrHome();
    this.idxPhotoLoaded = new Array(photoService.getImgArrHome.length).fill(false);
    this.activeImg = photoService.getImgArrHome.length-1;
    this.imgShowDuration = 4000; //millis to show image before starting transitions
    this.timeoutId = setTimeout(()=> {}, 0);
    this.photoClassOpac100 = 'transition duration-700 z-30 object-scale-down opacity-100';
    this.photoClassOpac0 = 'transition duration-700 z-30 object-scale-down opacity-0';
    this.photoClassHide = 'hidden';
    this.photoClass = this.photoClassOpac0;
    this.spinnerHolderClassShow = 'transition duration-700 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-100';
    this.spinnerHolderClassHide = 'transition duration-700 absolute z-20 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 opacity-0';
    this.spinAndImgHolderDivClass = 'xl:h-[85vh] lg:h-[80vh] md:h-[80vh] h-[75vh] relative items-center block';
    this.spinnerClass = this.spinnerHolderClassHide;
  }

  @HostListener('window:load')
  onLoad() {
  }

  clickImg(): void {
    //if outstanding autoclick, cancel
    clearTimeout(this.timeoutId);
    this.photoClass = this.photoClassOpac0;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }

  setImgAsLoaded(i:number): void {
    this.idxPhotoLoaded[i] = true;
  }

  autoAdvImg(): void {
    this.photoClass = this.photoClassOpac0;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }  

  advanceImage(): void {
    if (this.activeImg == this.imgArrHome.length - 1 && this.idxPhotoLoaded[0]) {
      this.spinnerClass = this.spinnerHolderClassHide;
      this.activeImg = 0;
      setTimeout(() => {
        this.photoClass = this.photoClassOpac100;
      }, 50);

      //trigger auto advance
      this.timeoutId = setTimeout(() => {
        this.autoAdvImg()
      }, this.imgShowDuration);
    }
    else if (this.activeImg == this.imgArrHome.length-1 && (!this.idxPhotoLoaded[0])) {
      this.spinnerClass = this.spinnerHolderClassShow;
      //cancel pending autoAdvance
      clearTimeout(this.timeoutId);
      //delay a little bit
      this.timeoutId = setTimeout(() => {
        this.advanceImage();
      }, 150);
    }
    else if (this.idxPhotoLoaded[this.activeImg+1]) {
      this.spinnerClass = this.spinnerHolderClassHide;
      this.activeImg++;
      setTimeout(() => {
        this.photoClass = this.photoClassOpac100;
      }, 50);
      //trigger auto advance
      this.timeoutId = setTimeout(() => {
        this.autoAdvImg()
      }, this.imgShowDuration);
    }
    else {
      this.spinnerClass = this.spinnerHolderClassShow;
      //cancel pending autoAdvance
      clearTimeout(this.timeoutId);
      //delay a little bit
      this.timeoutId = setTimeout(() => {
        this.advanceImage();
      }, 150);
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.idxPhotoLoaded.fill(false);
    this.timeoutId = setTimeout(()=> {
      this.advanceImage();
    }, 150);
  }

}