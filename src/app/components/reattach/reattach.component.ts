import {
  Component,
  OnInit,
  Injectable,
  ChangeDetectorRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BitcoinPriceProvider {
  price: number = 100;

  constructor() {
    setInterval(() => {
      this.price = Math.floor(Math.random() * 1000) + 100;
      console.log('Precio actual', this.price);
    }, 500);
  }
}
@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs: ['enVivo'],
})
export class ReattachComponent implements OnInit {
  mostrarEnVivo: boolean = true;

  constructor(
    public bitcoinPrice: BitcoinPriceProvider,
    private ref: ChangeDetectorRef
  ) {}

  set enVivo(value: boolean) {
    this.mostrarEnVivo = value;
    if (value) {
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }

  ngOnInit(): void {}
}
