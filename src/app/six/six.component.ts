import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adder',
  template: `
  <div #add style="position: fixed; height: 97.5%; width: 98.5%; border: 1px solid blue ;"></div>
   `,

})

export class SixComponent implements OnChanges, OnInit{
  @Input() gborderx!:number[];
  @Input() gbordery!:number[];
  @Output() setborderx : EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() setbordery : EventEmitter<number[]> = new EventEmitter<number[]>();
  public borderx!:number[];
  public bordery!:number[];
  public allborderx!:number[];
  public allbordery!:number[];
  public sortborderx!:number[];
  public sortbordery!:number[];
  public getborderx!:number[];
  public getbordery!:number[];
  public text!: String;
  public wasInside = false;
  public clientx!:number;
  public clienty!:number;
  public gbx!:number[];
  public gby!:number[];

  ngOnChanges(){
  	this.gbx = this.gborderx;
  	this.gby = this.gbordery;
  }

  ngOnInit(){
    this.gbx = this.gborderx;
  	this.gby = this.gbordery;
  	this.borderx=[];
  	this.bordery=[];
  	this.allborderx=[];
  	this.allbordery=[];
  	this.sortborderx=[];
  	this.sortbordery=[];
  	this.getborderx=[];
  	this.getbordery=[];
  }

@ViewChild('add')
    private animateThis!: ElementRef;

@HostListener('mousedown', ['$event'])
  clickInside(event: MouseEvent) : void {
  this.text = "clicked inside";

  this.clientx = event.clientX-8;
  this.clienty = event.clientY-10;

  this.sortborderx = this.borderx;
this.sortbordery = this.bordery;

this.sortborderx.sort(function(a, b){return a - b});
this.sortbordery.sort(function(a, b){return a - b});

this.getborderx[0]=this.sortborderx[0];
this.getbordery[0]=this.sortbordery[0];

for (var i=1; i<this.getborderx.length; i++){
  this.getborderx[i]=this.sortborderx[i]-this.sortborderx[i-1];
}
for (var i=1; i<this.getbordery.length; i++){
  this.getbordery[i]=this.sortbordery[i]-this.sortbordery[i-1];
}

this.allborderx = this.getborderx.concat(this.gbx);
this.allbordery = this.getbordery.concat(this.gby);

  for (var i=0; i<this.allborderx.length; i++){
  	if ((event.clientX-this.allborderx[i]<7)&&(event.clientX-this.allborderx[i]>-7)){
  		this.clientx = this.allborderx[i];
  	}
  } 
  for (var i=0; i<this.allbordery.length; i++){

  	if ((event.clientY-this.allbordery[i]<7)&&(event.clientY-this.allbordery[i]>-7)){
  		this.clienty = this.allbordery[i];
  	}
  } 

  const newdiv = this.renderer.createElement('div');
  this.renderer.appendChild(this.animateThis.nativeElement, newdiv);

  //newdiv.setAttribute('style', 'border: 1px dashed red; position: fixed; margin-left:'+event.clientX+);
  this.renderer.setStyle(newdiv, 'border', '2px dashed red');
  this.renderer.setStyle(newdiv, 'background', '#f4f0ec');
  this.renderer.setStyle(newdiv, 'opacity', '0.4');
  this.renderer.setStyle(newdiv, 'position', 'fixed');
  this.renderer.setStyle(newdiv, 'margin-left', this.clientx+'px');
  this.renderer.setStyle(newdiv, 'margin-top', this.clienty+'px');

  this.borderx.push(this.clientx);
  this.bordery.push(this.clienty);


  this.setborderx.emit(this.borderx);
  this.setbordery.emit(this.bordery);

  this.wasInside = true;
  }
  
  @HostListener('document:mousedown')
  clickout() {
    if (!this.wasInside) {
      this.text = "clicked outside";
    }
    //this.wasInside = false;
  }

  @HostListener('mouseup', ['$event'])
  clickup(event: MouseEvent):void {

  this.clientx = event.clientX-8;
  this.clienty = event.clientY-10;

  this.sortborderx = this.borderx;
this.sortbordery = this.bordery;

this.sortborderx.sort(function(a, b){return a - b});
this.sortbordery.sort(function(a, b){return a - b});

this.getborderx[0]=this.sortborderx[0];
this.getbordery[0]=this.sortbordery[0];

for (var i=1; i<this.getborderx.length; i++){
  this.getborderx[i]=this.sortborderx[i]-this.sortborderx[i-1];
}
for (var i=1; i<this.getbordery.length; i++){
  this.getbordery[i]=this.sortbordery[i]-this.sortbordery[i-1];
}

this.allborderx = this.getborderx.concat(this.gbx);
this.allbordery = this.getbordery.concat(this.gby);

  for (var i=0; i<this.allborderx.length; i++){
  	if ((event.clientX-this.allborderx[i]<7)&&(event.clientX-this.allborderx[i]>-7)){
  		this.clientx = this.allborderx[i];
  	}
  } 
  for (var i=0; i<this.allbordery.length; i++){

  	if ((event.clientY-this.allbordery[i]<7)&&(event.clientY-this.allbordery[i]>-7)){
  		this.clienty = this.allbordery[i];
  	}
  } 
     const newdiv = this.animateThis.nativeElement.children[this.animateThis.nativeElement.children.length-1];
     const w = newdiv.style.marginLeft;
  	 const h = newdiv.style.marginTop;
  	 this.renderer.setStyle(newdiv, 'width', (this.clientx-parseFloat(w))+'px');
  	 this.renderer.setStyle(newdiv, 'height', (this.clienty-parseFloat(h))+'px');
    //const newdiv = this.animateThis.nativeElement.last;

  this.borderx.push(this.clientx+5);
  this.bordery.push(this.clienty+5);
 
  this.setborderx.emit(this.borderx);
  this.setbordery.emit(this.bordery);

    this.wasInside = false;
  }

  @HostListener('mousemove', ['$event'])
  clickmove(event: MouseEvent):void {

    event.preventDefault();

 	if (this.wasInside){

 	this.clientx = event.clientX-8;
  this.clienty = event.clientY-10;
  

   this.sortborderx = this.borderx;
this.sortbordery = this.bordery;

this.sortborderx.sort(function(a, b){return a - b});
this.sortbordery.sort(function(a, b){return a - b});

this.getborderx[0]=this.sortborderx[0];
this.getbordery[0]=this.sortbordery[0];

for (var i=1; i<this.getborderx.length; i++){
  this.getborderx[i]=this.sortborderx[i]-this.sortborderx[i-1];
}
for (var i=1; i<this.getbordery.length; i++){
  this.getbordery[i]=this.sortbordery[i]-this.sortbordery[i-1];
}

this.allborderx = this.getborderx.concat(this.gbx);
this.allbordery = this.getbordery.concat(this.gby);

  for (var i=0; i<this.allborderx.length; i++){
  	if ((event.clientX-this.allborderx[i]<7)&&(event.clientX-this.allborderx[i]>-7)){
  		this.clientx = this.allborderx[i];
  	}
  } 
  for (var i=0; i<this.allbordery.length; i++){

  	if ((event.clientY-this.allbordery[i]<7)&&(event.clientY-this.allbordery[i]>-7)){
  		this.clienty = this.allbordery[i];
  	}
  } 

 	 const newdiv = this.animateThis.nativeElement.children[this.animateThis.nativeElement.children.length-1];
     const w = newdiv.style.marginLeft;
  	 const h = newdiv.style.marginTop;
  	 this.renderer.setStyle(newdiv, 'width', (this.clientx-parseFloat(w))+'px');
  	 this.renderer.setStyle(newdiv, 'height', (this.clienty-parseFloat(h))+'px');

 	}

  }

  constructor(private eRef: ElementRef, private renderer: Renderer2 ) {
  }

}
