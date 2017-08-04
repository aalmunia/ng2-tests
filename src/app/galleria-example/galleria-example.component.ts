import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/primeng';
import { GalleriaExampleService } from './galleria-example.service';

@Component({
  selector: 'app-galleria-example',
  providers: [GalleriaExampleService],
  templateUrl: './galleria-example.component.html',
  styleUrls: ['./galleria-example.component.css']
})
export class GalleriaExampleComponent implements OnInit {

  aGalleriaImages: any;
  strSelectedImage: String;

  constructor(private oDataService: GalleriaExampleService) { }

  ngOnInit() {
    this.aGalleriaImages = this.oDataService.getRemoteImages();
  }

  hndlGalleriaImageClicked(image, event, index) {
    console.log(image);
    console.log(event);
    console.log(index);
    this.strSelectedImage = 'IMAGEN SELECCIONADA: \n';
    this.strSelectedImage += 'URL: ' + image.source + '\n';
    this.strSelectedImage += 'TITULO: ' + image.title;
  }

}
