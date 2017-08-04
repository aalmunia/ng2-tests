import { Injectable } from '@angular/core';

@Injectable()
export class GalleriaExampleService {

  constructor() { }

  getRemoteImages() {
    return [
      {
        source: 'https://getlostblog.files.wordpress.com/2011/12/ilya-repin-imperial-reception-of-freeholding-elders-in-the-courtyard-of-the-petrovsky-palace-on-18-may.jpg',
        alt: 'Imperial reception in zarist Russia',
        title: 'Imperial reception of freeholding elders in the courtyard of the petrovsky palace on 18 may'
      },
      {
        source: 'http://www.myfreewallpapers.net/artistic/wallpapers/ilya-repin-wedding-of-nicholas-ii-and-grand-duchess.jpg'        ,
        alt: 'The Tzars wedding',
        title: 'Wedding of Nicholas II of Russia, and the Grand Duchess'
      },
      {
        source: 'https://s-media-cache-ak0.pinimg.com/originals/c8/fb/23/c8fb239a2ab80cae5e24dc01eed3f301.jpg',
        alt: 'Cossacks',
        title: 'The cossacks divide the spoils of battle'
      },
      {
        source: 'https://s-media-cache-ak0.pinimg.com/originals/e0/4e/00/e04e008fc7c921408995ed29e828e33f.jpg',
        alt: 'Volga',
        title: 'The Volga battalion'
      },
      {
        source: 'http://2.bp.blogspot.com/-yx3aTq4A9Xc/VEGqfpipluI/AAAAAAAAeuY/_XaF8OOfvWo/s1600/Repin%2C%2BIlya%2C%2BIvan%2Bthe%2BTerrible%2Band%2Bhis%2Bson%2B1870-73.jpg',
        alt: 'Ivan the terrible',
        title: 'Ivan the terrible kills his son the Zarevich'
      }
    ];
  }

}
