import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit {
  /**
   * @description
   * Valor que se va a incrementar cada segundo en archivo TS
   * y que dependiendo de la estrategia de Change Detection
   * se va a actualizar o no en el archivo HTML
   */

  seconds: number = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.seconds++;
      console.log('Segundos transcurridos:', this.seconds);
    }, 1000);
  }
}
