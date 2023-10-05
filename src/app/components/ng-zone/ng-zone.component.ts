import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss'],
})
export class NgZoneComponent implements OnInit {

  progreso: number = 0;
  texto: string = '';

  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {}

  incrementarProgreso(terminar: () => void) {
    this.progreso += 1;
    console.log('Progreso', this.progreso);

    if (this.progreso < 100) {
      window.setTimeout(() => {
        this.incrementarProgreso(terminar);
      }
      , 10);
    }
  }
}
