import { Component, ElementRef, AfterViewInit, ViewChild,  Input, QueryList, HostListener, Renderer2, OnInit } from '@angular/core';

 
@Component({
  selector: 'golden0',
  template: `
<golden1 *ngIf="show.st"></golden1>
<golden2 *ngIf="show.st"></golden2>
<golden3 *ngIf="show.nd"></golden3>
<golden4 *ngIf="show.nd"></golden4>
<adder [gborderx]="gborderx" [gbordery]="gbordery" (setborderx)="setborderx($event)" (setbordery)="setbordery($event)"></adder>
<div style="border: 1px solid red; height: 30px; width: 30px; position: fixed; margin-top: 10px; margin-left: 95%;" (click)="show.st = !show.st; show.nd = !show.nd; gbor()"></div>
<borders [getborderx]="getborderx" [getbordery]="getbordery"></borders>
`,

})

export class AppComponent implements OnInit{
public gborderx!:number[];
public gbordery!:number[];
public getborderx: any[] = [];
public getbordery: any[] = [];

ngOnInit() {
    this.gborderx = [];
    	this.gbordery = [];
    	this.gborderx.push((window.innerHeight*5/13-10)+((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*3/13-10));
    	this.gbordery.push((window.innerHeight*3/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*5/13-10));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*3/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight-window.innerHeight/1.6)/2)+window.innerHeight);
    	this.gborderx.push(((window.innerWidth-window.innerHeight-window.innerHeight/1.6)/2)+(window.innerHeight/1.6));
    	this.gbordery.push((window.innerHeight/1.6-15));
    	this.gbordery.push((window.innerHeight*3/8-15));
  }

show = {
	st : true,
	nd : false
}

setborderx(arr: number[]){
	this.getborderx=arr;
}
setbordery(arr: number[]){
	this.getbordery=arr;
}

public gbor(){
    if (this.show.st){
    	this.gborderx = [];
    	this.gbordery = [];
    	this.gborderx.push((window.innerHeight*5/13-10)+((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*3/13-10));
    	this.gbordery.push((window.innerHeight*3/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*5/13-10));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*3/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+(window.innerHeight*5/13-10));
    	this.gborderx.push(((window.innerWidth-window.innerHeight-window.innerHeight/1.6)/2)+window.innerHeight);
    	this.gborderx.push(((window.innerWidth-window.innerHeight-window.innerHeight/1.6)/2)+(window.innerHeight/1.6));
    	this.gbordery.push((window.innerHeight/1.6-15));
    	this.gbordery.push((window.innerHeight*3/8-15));
    } else {
    	this.gborderx = [];
    	this.gbordery = [];
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-100));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gbordery.push((window.innerHeight*3/13-10));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gborderx.push((window.innerHeight*5/13-10));
    	this.gborderx.push((window.innerHeight*3/13-10));
    	this.gbordery.push((window.innerHeight*5/13-10));
    	this.gbordery.push((window.innerHeight*3/13-10));
    	this.gbordery.push((window.innerHeight*5/13-10));
    } 
}


}

