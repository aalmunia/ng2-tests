import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { RatingModule } from 'primeng/primeng';

@Component({
  selector: 'app-rating-example',
  templateUrl: './rating-example.component.html',
  styleUrls: ['./rating-example.component.css']
})
export class RatingExampleComponent implements OnInit {

  private iRatingStandard: number;
  private iRatingCallback: number;
  private iRatingNoCancel: number;
  private iRatingReadOnly: number;
  private strCallbackResult: string;

  constructor() { }

  ngOnInit() {
    this.iRatingReadOnly = 7;
  }

  handleRate(oEvent) {
    this.strCallbackResult = 'Se ha valorado con un ' + oEvent.value;
  }

  handleCancel(oEvent) {
    this.strCallbackResult = 'Se ha cancelado la valoración';
  }

}
