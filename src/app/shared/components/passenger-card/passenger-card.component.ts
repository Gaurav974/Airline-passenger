import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../model/interface.component';
import { count } from 'rxjs';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() getpasengerarr: Array<Ipassenger>=[]
  @Output() snedarrtoparent :EventEmitter<any>=new EventEmitter()
  @Output() sentPassId : EventEmitter<number> = new EventEmitter()
 
  constructor() { }

  ngOnInit(): void {
   
    // for (const iterator of this.getpasengerarr) {
    //   let obj : any ={
    //     id:iterator.id,
    //     fullname:iterator.fullname 
    //    }
    //   this.snedarrtoparent.emit(obj)
    // }
  }

  OnEdithandler(OnUpdatebtn: HTMLButtonElement ,editbtn : HTMLButtonElement){
     let info1 =editbtn as HTMLButtonElement
     info1.classList.add('d-none')
     let info =OnUpdatebtn as HTMLButtonElement
     info.classList.remove('d-none')
   
     
  }
 OnUpdate(OnUpdatebtn: HTMLButtonElement ,editbtn : HTMLButtonElement,id : any, editinputval :HTMLInputElement){
      let obj : any={
        id:id,
        fullname:editinputval.value
        
     }
    this.snedarrtoparent.emit(obj )


     console.log(obj)
     let info1 =editbtn as HTMLButtonElement
     info1.classList.remove('d-none')
     let info =OnUpdatebtn as HTMLButtonElement
     info.classList.add('d-none')
 }
 
  OndeleteHandler(id : any,getname:string){
    id.remove()
    let pID = id.getAttribute('id')
     this.sentPassId.emit(pID)
  }

}
