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
    if (this.progreso < 100) {
      this.progreso += 1;
      console.log('Progreso', this.progreso);
      window.setTimeout(() => {
        this.incrementarProgreso(terminar);
      }, 10);
    } else {
      terminar();
    }
  }

  aumentarDentroNgZone() {
    this.texto = 'Dentro';
    this.progreso = 0;
    this.incrementarProgreso(() => console.log(`${this.texto} terminado`));
  }

  aumentarFueraNgZone() {
    this.texto = 'Fuera';
    this.progreso = 0;
    this._ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        this._ngZone.run(() => console.log(`${this.texto} terminado`));
      });
    });
  }
}
