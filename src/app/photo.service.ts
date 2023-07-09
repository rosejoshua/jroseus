import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  imgArr: Array <{ nameStr: string, altStr: string, width: number, height: number }>;
  constructor() {
    this.imgArr = [
      {
        nameStr: '/assets/img/Gold-Buddha-statue-in-Laos.JPG',
        altStr: 'Gold Buddha statue in Laos',
        width: 880,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Rock-formation-in-Arches-National-Park.JPG',
        altStr: 'Rock formation in Arches National Park',
        width: 1366,
        height: 910,
      },
      {
        nameStr: '/assets/img/Purple-Clematis-Rooguchi-flower.JPG',
        altStr: 'Purple Clematis Rooguchi flower',
        width: 913,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Desert-shrub-at-sunset.JPG',
        altStr: 'Desert shrub at sunset',
        width: 1366,
        height: 913,
      },
      {
        nameStr: '/assets/img/Young-man-cooking-street-food-in-Thailand.JPG',
        altStr: 'Young man cooking street food in Thailand',
        width: 912,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Sunset-mountains-and-ocean-outside-of-Anchorage.JPG',
        altStr: 'Sunset mountains and ocean outside of Anchorage',
        width: 1366,
        height: 912,
      },
      {
        nameStr: '/assets/img/Taxi-driver-from-back-seat-in-SE-Asia.JPG',
        altStr: 'Taxi driver from back seat in SE Asia',
        width: 1366,
        height: 877,
      },
      {
        nameStr: '/assets/img/Buddhist-novices-at-the-shore-in-Cambodia.JPG',
        altStr: 'Buddhist novices at the shore in Cambodia',
        width: 1009,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Cambodian-fishermen-relaxing-at-the-end-of-the-day.JPG',
        altStr: 'Cambodian fishermen relaxing at the end of the day',
        width: 1366,
        height: 956,
      },
      {
        nameStr: '/assets/img/View-of-lighted-bridge-from-the-water-in-Vietnam.JPG',
        altStr: 'View of lighted bridge from the water in Vietnam',
        width: 1366,
        height: 978,
      },
      {
        nameStr: '/assets/img/Buddhist-followers-connected-by-sai-sin.JPG',
        altStr: 'Buddhist followers connected by sai sin',
        width: 1366,
        height: 1022,
      },
      {
        nameStr: '/assets/img/Macaque-relaxing-with-ocean-background-Thailand.JPG',
        altStr: 'Macaque relaxing with ocean background Thailand',
        width: 1366,
        height: 912,
      },
      {
        nameStr: '/assets/img/Angkor-Wat-view-of-columns-and-shadows.JPG',
        altStr: 'Angkor Wat view of columns and shadows',
        width: 1366,
        height: 912,
      },
      {
        nameStr: '/assets/img/Touring-bicycle,-monkeys-and-street-dog-in-Thailand.JPG',
        altStr: 'Touring bicycle, monkeys and street dog in Thailand',
        width: 1366,
        height: 948,
      },
      {
        nameStr: '/assets/img/Winter-Aconite-from-Resurrection-Pass-Trail-in-Alaska.JPG',
        altStr: 'Winter Aconite from Resurrection Pass Trail in Alaska',
        width: 1366,
        height: 865,
      },
      {
        nameStr: '/assets/img/Old-French-Bridge-in-Kampot,-Cambodia.JPG',
        altStr: 'Old French Bridge in Kampot, Cambodia',
        width: 1366,
        height: 782,
      },
      {
        nameStr: '/assets/img/A-horse-on-a-snowy-mountain-in-Nepal.JPG',
        altStr: 'A horse on a snowy mountain in Nepal',
        width: 1366,
        height: 859,
      },
      {
        nameStr: '/assets/img/Siberian-Iris-flower-at-dusk.JPG',
        altStr: 'Siberian Iris flower at dusk',
        width: 1366,
        height: 913,
      },
      {
        nameStr: '/assets/img/Street-cat-at-night-in-Cambodia.JPG',
        altStr: 'Street cat at night in Cambodia',
        width: 1366,
        height: 809,
      },
      {
        nameStr: '/assets/img/Lady-at-her-fruit-stand-in-Cambodia.JPG',
        altStr: 'Lady at her fruit stand in Cambodia',
        width: 1366,
        height: 1328,
      },
      {
        nameStr: '/assets/img/Barefooted-man-at-Old-French-Bridge-in-Cambodia.JPG',
        altStr: 'Barefooted man at Old French Bridge in Cambodia',
        width: 1366,
        height: 912,
      },
      {
        nameStr: '/assets/img/Beer-mug-in-candlelight.JPG',
        altStr: 'Beer mug in candlelight',
        width: 1366,
        height: 1013,
      },
      {
        nameStr: '/assets/img/Black-and-white-photo-of-a-very-small-flower.JPG',
        altStr: 'Black and white photo of a very small flower',
        width: 1366,
        height: 921,
      },
      {
        nameStr: '/assets/img/Ladies-taking-a-break-from-bar-work-in-Phnom-Penh.JPG',
        altStr: 'Ladies taking a break from bar work in Phnom Penh',
        width: 1366,
        height: 1085,
      },
      {
        nameStr: '/assets/img/Man-cooking-Cambodian-street-food.JPG',
        altStr: 'Man cooking Cambodian street food',
        width: 1366,
        height: 1004,
      },
      {
        nameStr: '/assets/img/False-Hellebore-in-Alaska.JPG',
        altStr: 'False Hellebore in Alaska',
        width: 1366,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Busan-fish-market-vendors.JPG',
        altStr: 'Busan fish market vendors',
        width: 1366,
        height: 1137,
      },
      {
        nameStr: '/assets/img/Lady-cooking-street-food-at-night-in-Bangkok.JPG',
        altStr: 'Lady cooking street food at night in Bangkok',
        width: 1366,
        height: 974,
      },
      {
        nameStr: '/assets/img/Rock-and-roll-band-in-Bangkok.JPG',
        altStr: 'Rock and roll band in Bangkok',
        width: 1366,
        height: 1043
      },
      {
        nameStr: '/assets/img/Beautiful-classic-wooden-housefront-in-historic-Seoul.JPG',
        altStr: 'Beautiful classic wooden housefront in historic Seoul',
        width: 1366,
        height: 910,
      },
      {
        nameStr: '/assets/img/Man-with-headlamp-and-trekking-poles-in-the-dark.JPG',
        altStr: 'Man with headlamp and trekking poles in the dark',
        width: 1366,
        height: 942,
      },
      {
        nameStr: '/assets/img/Two-men-talk-and-smoke-at-night-in-Seoul.JPG',
        altStr: 'Two men talk and smoke at night in Seoul',
        width: 1366,
        height: 951,
      },
      {
        nameStr: '/assets/img/Long-haired-mountain-goat-in-Nepal.JPG',
        altStr: 'Long haired mountain goat in Nepal',
        width: 1366,
        height: 821,
      },
      {
        nameStr: '/assets/img/Bald-rock-in-the-mountains-of-Korea.JPG',
        altStr: 'Bald rock in the mountains of Korea',
        width: 1366,
        height: 962,
      },
      {
        nameStr: '/assets/img/Gamcheon-Culture-Village-in-Busan.JPG',
        altStr: 'Gamcheon Culture Village in Busan',
        width: 1366,
        height: 850,
      },
      {
        nameStr: '/assets/img/Rock-climbers-on-Fine-Jade-in-Moab,-Utah.JPG',
        altStr: 'Rock climbers on Fine Jade in Moab, Utah',
        width: 911,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Ancient-stone-sculpture-at-Angkor-Wat-in-Cambodia.JPG',
        altStr: 'Ancient stone sculpture at Angkor Wat in Cambodia',
        width: 1366,
        height: 1041,
      },
      {
        nameStr: '/assets/img/Beach-sunset-during-receding-tide.JPG',
        altStr: 'Beach sunset during receding tide',
        width: 900,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Old-tree-and-sandstone-at-Bryce-Canyon.JPG',
        altStr: 'Old tree and sandstone at Bryce Canyon',
        width: 911,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Elephant-bursting-through-trees-at-a-wildlife-sanctuary-in-Cambodia.JPG',
        altStr: 'Elephant bursting through trees at a wildlife sanctuary in Cambodia',
        width: 1366,
        height: 911,
      },
      {
        nameStr: '/assets/img/Khmer-temple-caretaker-with-headscarf.JPG',
        altStr: 'Khmer temple caretaker with headscarf',
        width: 869,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Angry-macaque-at-a-temple-in-Cambodia.JPG',
        altStr: 'Angry macaque at a temple in Cambodia',
        width: 912,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Cambodian-blacksmith-hammering-a-sickle.JPG',
        altStr: 'Cambodian blacksmith hammering a sickle',
        width: 1027,
        height: 1366,
      },
      {
        nameStr: '/assets/img/Buddhist-novices-at-the-beach-in-Cambodia.JPG',
        altStr: 'Buddhist novices at the beach in Cambodia',
        width: 1366,
        height: 1208,
      },
      {
        nameStr: '/assets/img/Vietnamese-riverboat-at-night.JPG',
        altStr: 'Vietnamese riverboat at night',
        width: 1366,
        height: 912,
      },
      {
        nameStr: '/assets/img/Man-smoking-outside-of-his-restaurant-at-night-in-Hong-Kong.JPG',
        altStr: 'Man smoking outside of his restaurant at night in Hong Kong',
        width: 1366,
        height: 1041,
      },
      {
        nameStr: '/assets/img/Vietnamese-woman-counts-money-while-husband-watches.JPG',
        altStr: 'Vietnamese woman counts money while husband watches',
        width: 1366,
        height: 1329,
      },
      {
        nameStr: '/assets/img/Nepalese-porters-carrying-a-very-heavy-load.JPG',
        altStr: 'Nepalese porters carrying a very heavy load',
        width: 1366,
        height: 1238,
      },
      {
        nameStr: '/assets/img/Boats-on-the-Mekong-River-near-Luang-Prabang,-Laos.JPG',
        altStr: 'Boats on the Mekong River near Luang Prabang, Laos',
        width: 1366,
        height: 965,
      },
      {
        nameStr: '/assets/img/Interesting-cloud-formation-in-the-desert-southwest.JPG',
        altStr: 'Interesting cloud formation in the desert southwest',
        width: 1366,
        height: 1042,
      },
      {
        nameStr: '/assets/img/Bull-near-home-in-Nepalese-village.JPG',
        altStr: 'Bull near home in Nepalese village',
        width: 1366,
        height: 890,
      },
      {
        nameStr: '/assets/img/Smoky-sunrise-on-the-Mekong-River-near-Luang-Prabang,-Laos.JPG',
        altStr: 'Smoky sunrise on the Mekong River near Luang Prabang, Laos',
        width: 1366,
        height: 946,
      },
      {
        nameStr: '/assets/img/Monkey-and-prayer-flags-in-Kathmandu,-Nepal.JPG',
        altStr: 'Monkey and prayer flags in Kathmandu, Nepal',
        width: 1366,
        height: 911,
      },
      {
        nameStr: '/assets/img/Climber-lost-in-thought-near-the-beach-in-Thailand.JPG',
        altStr: 'Climber lost in thought near the beach in Thailand',
        width: 1366,
        height: 974,
      },
    ];
  }

  getImgArr() {
    return this.imgArr;
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

}