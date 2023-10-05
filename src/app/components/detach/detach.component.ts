import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Injectable,
} from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root',
})
export class DataListProvider {
  get data() {
    const RandomName = Mock.Random;
    return [
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
      RandomName.first(),
    ];
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
})
export class DetachComponent implements OnInit {
  constructor(
    private ref: ChangeDetectorRef,
    public dataListProvider: DataListProvider
  ) {}

  ngOnInit(): void {
    this.ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 3000);
  }
}
