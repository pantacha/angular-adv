import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'angular-adv-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() title: string;
  @Input() progress: number;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.txtProgress.nativeElement.focus();
    this.progress += value;
    this.cambioValor.emit(this.progress);
  }

  cambioDelngModel(value: number){
    //let htmlValue:any = document.getElementsByName('progress')[0];
    //console.log(htmlValue);
    if(value>=100){
      this.progress = 100;
    }else if(value<=0){
      this.progress = 0;
    }else{
      this.progress = value; 
    }
    //htmlValue.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.cambioValor.emit(this.progress);
  }

}
