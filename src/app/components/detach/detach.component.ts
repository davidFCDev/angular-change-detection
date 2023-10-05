import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root'
})
export class DataListProvider {

  get data() {
    return Mock.mock({
      'list|10': [{
        'id|+1': 1,
        'name': '@cname',
        'age|20-30': 1,
        'address': '@county(true)',
        'checked': false
      }]
    }).list;
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
})
export class DetachComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}


