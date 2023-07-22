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
  photoClassOpac100: string;
  photoClassOpac0: string;
  photoClassHide: string;
  photoClass: string;
  activeImg: number;
  timeoutId: NodeJS.Timeout;
  imgShowDuration: number;

  constructor(route:ActivatedRoute, private photoService: PhotoService) {
    
    this.imgArrHome = this.photoService.getImgArrHome();
    this.activeImg = 0;
    this.imgShowDuration = 4000; //millis to show image before starting transitions
    this.timeoutId = setTimeout(()=> {}, 0);
    this.photoClassOpac100 = 'transition duration-700 object-scale-down min-h-[400px] opacity-100';
    this.photoClassOpac0 = 'transition duration-700 object-scale-down min-h-[400px] opacity-0';
    this.photoClassHide = 'hidden';
    this.photoClass = this.photoClassOpac0;
  }

  @HostListener('window:load')
  onLoad() {
  }

  autoAdvImg(): void {
    this.photoClass = this.photoClassOpac0;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }

  clickImg(): void {
    //if outstanding autoclick, cancel
    clearTimeout(this.timeoutId);
    this.photoClass = this.photoClassOpac0;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }

  showImg(): void {
    setTimeout(() => {
      this.photoClass = this.photoClassOpac100;
    }, 50);
  }

  advanceImage(): void {
    if(this.activeImg == this.imgArrHome.length-1) {
      this.activeImg = 0;
    }
    else {
      this.activeImg++;
    }

    //regardless of how we got here, set timeout for next advance
    this.timeoutId = setTimeout(() => {
      this.autoAdvImg()
    }, this.imgShowDuration);
  }

  ngOnInit(): void {
    

    this.timeoutId = setTimeout(()=> {
      this.autoAdvImg();
    }, this.imgShowDuration);
  }

}