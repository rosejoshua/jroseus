import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimeoutInfo } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgArr: Array <{ nameStr: string, altStr: string }>;
  photoAlts: Array<string>;
  photoNames: Array<string>;
  photoClassShow: string;
  photoClassHide: string;
  photoClass: string;
  activeImg: number;
  timeoutId: NodeJS.Timeout;
  imgShowDuration: number;

  constructor(route:ActivatedRoute) {
    this.photoAlts = [
      'Elephant bursting through trees at a wildlife sanctuary in Cambodia',
      'Gold Buddha statue in Laos',
      'A horse on a snowy mountain in Nepal',
      'Khmer temple caretaker with headscarf',
      'Macaque relaxing with ocean background Thailand',
      'Buddhist novices at the shore in Cambodia',
      'Siberian Iris flower at dusk',
      'Rock climbers on Fine Jade in Moab, Utah',
      'Two men talk and smoke at night in Seoul',
      'Black and white photo of a very small flower',
      'Sunset mountains and ocean outside of Anchorage',
      'Vietnamese woman counts money while husband watches',
      'View of lighted bridge from the water in Vietnam',
      'Busan fish market vendors',
      'Vietnamese riverboat at night',
    ];
    this.photoNames = Object.assign([], this.photoAlts);
    this.activeImg = 0;
    this.imgShowDuration = 4000; //millis to show image before starting transitions
    this.timeoutId = setTimeout(()=> {}, 0);
    this.photoClassShow = 'transition duration-700 object-scale-down min-h-[400px] opacity-100';
    this.photoClassHide = 'transition duration-700 object-scale-down min-h-[400px] opacity-0';
    this.photoClass = this.photoClassHide;
    let re:RegExp = / /gi;
    this.photoNames.forEach((value, index, array) => {
      array[index] = '/assets/img/' + value.replace(re, '-') + '.JPG';
    });

    this.imgArr = [];
    for (let i = 0; i < this.photoAlts.length; i++) {
      this.imgArr.push({
        nameStr : this.photoNames[i],
        altStr : this.photoAlts[i],
      })
    }
  }

  @HostListener('window:load')
  onLoad() {
  }

  autoAdvImg(): void {
    this.photoClass = this.photoClassHide;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }

  clickImg(): void {
    //if outstanding autoclick, cancel
    clearTimeout(this.timeoutId);
    this.photoClass = this.photoClassHide;
    this.timeoutId = setTimeout(() => {
      this.advanceImage()
    }, 700);
  }

  showImg(): void {
    setTimeout(() => {
      this.photoClass = this.photoClassShow;
    }, 50);
  }

  advanceImage(): void {
    if(this.activeImg == this.imgArr.length-1) {
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