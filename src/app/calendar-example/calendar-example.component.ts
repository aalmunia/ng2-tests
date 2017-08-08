import { ViewChild, TemplateRef, Component, OnInit } from '@angular/core';
import { CalendarModule, Calendar } from 'primeng/primeng';

@Component({
  selector: 'app-calendar-example',
  templateUrl: './calendar-example.component.html',
  styleUrls: ['./calendar-example.component.css']
})
export class CalendarExampleComponent implements OnInit {

  @ViewChild('firstCalendar') firstCalendar: Calendar;
  @ViewChild('thirdCalendar') thirdCalendar: Calendar;
  private secondCalendarValue: Date;
  private thirdCalendarValue: Date;

  private minDateFourthCalendar: Date;
  private maxDateFourthCalendar: Date;

  private fechasEnEspanol: any;

  constructor() {
    this.minDateFourthCalendar = new Date("08/01/2017");
    this.maxDateFourthCalendar = new Date("10/01/2017");
    this.fechasEnEspanol = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
    }
  }

  ngOnInit() {
    this.secondCalendarValue = new Date();
    this.thirdCalendarValue = new Date();
  }

  hndlFirstCalendarSelect() {
    console.log(this.firstCalendar);
    console.log('Fecha elegida: ' + this.firstCalendar.value);
    console.log('Formato de fecha representada: ' + this.firstCalendar.dateFormat);
  }

  hndlSecondCalendarSelect() {

  }


}
