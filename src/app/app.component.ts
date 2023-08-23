import { Component, OnInit } from '@angular/core';
import { Ipassenger } from './shared/model/interface.component';
import { passengerArray } from './shared/constant/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title !: "pass"
  public passID !: any
  constructor() { }
  Passengerarr: Array<Ipassenger> = passengerArray
  count = 0
  ngOnInit(): void {

  }
  getdatatochid(eve: any) {
    this.Passengerarr.find(ele => {
      if (ele.id === eve.id) {
        console.log(ele)
        ele.fullname = eve.fullname
      }
    })
  }

  getID(id: any) {
  
      this.Passengerarr.splice(0, 1)
    
    

  }

}
