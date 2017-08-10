import { Injectable } from '@angular/core';

@Injectable()
export class GalleriaExampleService {

  constructor() { }

  getRemoteImages() {
    return [
      {
        source: 'http://quizpug.com/wp-content/uploads/qc-images/55d7780eac214.jpg',
        alt: 'Viven Leigh',
        title: 'My personal muse. Soooooo beautiful....'
      },
      {
        source: 'http://2.bp.blogspot.com/-67fQSCkFzLk/TjS1xgwAKOI/AAAAAAAAGU8/b2jI0sSSAzc/s640/gilda+rita+hayworth+decent+end.jpg',
        alt: 'Rita Hayworth',
        title: 'The muse of so many men in the 40s'
      },
      {
        source: 'https://reporterosenmovimiento.files.wordpress.com/2013/09/mae4.jpg',
        alt: 'Mae West',
        title: 'Good girls go to heaven. Bad girls... go everywhere'
      },
      {
        source: 'http://www.cornel1801.com/video/Adventures-of-Robin-Hood/Olivia-de-Havilland-as-Maid-Marian.jpg',
        alt: 'Olivia de Havilland',
        title: 'She is still alive... believe it' 
      },
      {
        source: 'https://i.ytimg.com/vi/SLYmxTb3ZsA/sddefault.jpg',
        alt: 'Bette Davis',
        title: 'The ugliest beauty of Hollywood'
      }
    ];
  }

}
