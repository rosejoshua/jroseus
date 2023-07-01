import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imgArr: Array <{ nameStr: string, altStr: string }>;
  photoAlts: Array<string>;
  photoNames: Array<string>;
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
  constructor() {
    this.photoAlts = [
      'Gold Buddha statue in Laos',
      'Rock formation in Arches National Park',
      'Purple Clematis Rooguchi flower',
      'Desert shrub at sunset',
      'Young man cooking street food in Thailand',
      'Sunset mountains and ocean outside of Anchorage',
      'Taxi driver from back seat in SE Asia',
      'Buddhist novices at the shore in Cambodia',
      'Cambodian fishermen relaxing at the end of the day',
      'View of lighted bridge from the water in Vietnam',
      'Buddhist followers connected by sai sin',
      'Macaque relaxing with ocean background Thailand',
      'Angkor Wat view of columns and shadows',
      'Touring bicycle, monkeys and street dog in Thailand',
      'Winter Aconite from Resurrection Pass Trail in Alaska',
      'Old French Bridge in Kampot, Cambodia',
      'A horse on a snowy mountain in Nepal',
      'Siberian Iris flower at dusk',
      'Street cat at night in Cambodia',
      'Lady at her fruit stand in Cambodia',
      'Barefooted man at Old French Bridge in Cambodia',
      'Beer mug in candlelight',
      'Black and white photo of a very small flower',
      'Ladies taking a break from bar work in Phnom Penh',
      'Man cooking Cambodian street food',
      'False Hellebore in Alaska',
      'Busan fish market vendors',
      'Lady cooking street food at night in Bangkok',
      'Rock and roll band in Bangkok',
      'Beautiful classic wooden housefront in historic Seoul',
      'Man with headlamp and trekking poles in the dark',
      'Two men talk and smoke at night in Seoul',
      'Long-haired mountain goat in Nepal',
      'Bald rock in the mountains of Korea',
      'Gamcheon Culture Village in Busan',
      'Rock climbers on Fine Jade in Moab, Utah',
      'Ancient stone sculpture at Angkor Wat in Cambodia',
      'Beach sunset during receding tide',
      'Old tree and sandstone at Bryce Canyon',
      'Elephant bursting through trees at a wildlife sanctuary in Cambodia',
      'Khmer temple caretaker with headscarf',
      'Angry macaque at a temple in Cambodia',
      'Cambodian blacksmith hammering a sickle',
      'Buddhist novices at the beach in Cambodia',
      'Vietnamese riverboat at night',
      'Man smoking outside of his restaurant at night in Hong Kong',
    ];
    this.photoClassHide = 'transition duration-300 hover:scale-[102%] invisible opacity-0';
    this.photoClassShow = 'transition duration-300 hover:scale-[102%] shadow visible opacity-100';
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
    this.photoNames = Object.assign([], this.photoAlts);
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