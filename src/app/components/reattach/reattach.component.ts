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
  inputs: ['life'],
})
export class ReattachComponent implements OnInit {
  showLive: boolean = true;

  constructor(
    public bitcoinPriceProvider: BitcoinPriceProvider,
    private ref: ChangeDetectorRef
  ) {}

  set showLiveValue(value: boolean) {
    this.showLive = value;
    if (value) {
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }

  ngOnInit(): void {}
}
