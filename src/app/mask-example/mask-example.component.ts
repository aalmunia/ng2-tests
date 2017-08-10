import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { InputMaskModule } from 'primeng/primeng';

@Component({
  selector: 'app-mask-example',
  templateUrl: './mask-example.component.html',
  styleUrls: ['./mask-example.component.css']
})
export class MaskExampleComponent implements OnInit {

  @ViewChild('firstMask') firstMask: InputMaskModule;

  private sValOnlyLetters: string;
  private sValOnlyNumbers: string;
  private sValMobilePhone: string;
  private sValNIF: string;
  private sValISBN: string;
  private sValIBAN: string;

  constructor() { }

  ngOnInit() {
    console.log(this.firstMask);
  }

}
