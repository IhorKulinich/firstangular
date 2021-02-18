import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, Renderer2, Input, OnInit, OnChanges, Output, EventEmitter, ChangeDetectorRef, DoCheck } from '@angular/core';

@Component({
  selector: 'borders',
  template: `
  <div #bordered></div>
  `,
})
export class SevenComponent implements OnChanges, OnInit, DoCheck{
  @Input() getborderx: any[] = [];
  @Input() getbordery: any[] = [];
  public borderx: any[] = [];
  public bordery: any[] = [];
  public strx:string="";
  public stry:string="";
  public text!:string;
  public moving: boolean = false;
  @ViewChild('bordered')
    private animateThis!: ElementRef;

@HostListener('document:mousemove', ['$event'])
  clickmove(event: MouseEvent):void {
  	this.moving = false;
}

@HostListener('document:mousedown', ['$event'])
  clickdown(event: MouseEvent) : void {
 	this.moving = true;
  }

@HostListener('document:mouseup', ['$event'])
  clickup(event: MouseEvent) : void {
 	this.moving = true; 
  }

ngDoCheck() {

if (this.moving){

    if (this.getbordery!=undefined){
	   this.getborderx.sort(function(a, b){return a - b});
	   this.getbordery.sort(function(a, b){return a - b});

	   this.borderx[0]=this.getborderx[0];
	   this.bordery[0]=this.getbordery[0];

	   for (var i=1; i<this.getborderx.length; i++){
	      this.borderx[i]=this.getborderx[i]-this.getborderx[i-1];
	   }
	   for (var i=1; i<this.getbordery.length; i++){
	      this.bordery[i]=this.getbordery[i]-this.getbordery[i-1];
	   }

	   this.strx='';
	   this.stry='';

	   this.strx = this.borderx.join('px ');
	   this.stry = this.bordery.join('px ');

	   this.strx.substr(0,this.strx.length-2);
	   this.stry.substr(0,this.stry.length-2);

	   this.strx=this.strx+"px;";
	   this.stry=this.stry+"px;";

	}
		
	this.animateThis.nativeElement.setAttribute('style', 'display: grid; grid-template-columns: '+this.strx+' grid-auto-rows: '+this.stry);

	for (var i=0; i<this.animateThis.nativeElement.children.length; i++){
		this.animateThis.nativeElement.children[i].remove();
	}
	for (var i=0; i<(this.getborderx.length)*(this.getbordery.length); i++){
		const newdiv = this.renderer.createElement('div');
    	this.renderer.appendChild(this.animateThis.nativeElement, newdiv);
    	this.renderer.setStyle(newdiv, 'border', '1px dashed lightgreen');

    	if (this.animateThis.nativeElement.children.length>(this.getborderx.length)*(this.getbordery.length)){

    		for (var i=(this.getborderx.length)*(this.getbordery.length); i<this.animateThis.nativeElement.children.length; i++){
    			this.animateThis.nativeElement.children[i].remove();
    		}

    	}
	}
  }
  }

ngOnInit(): void {
  this.getborderx=[];
  this.getbordery=[];
  this.borderx=[];
  this.bordery=[];
};

ngOnChanges(): void{
	this.ref.detectChanges();

	if (this.getbordery!=undefined){
	   this.getborderx.sort(function(a, b){return a - b});
	   this.getbordery.sort(function(a, b){return a - b});

	   this.borderx[0]=this.getborderx[0];
	   this.bordery[0]=this.getbordery[0];

	   for (var i=1; i<this.getborderx.length; i++){
	      this.borderx[i]=this.getborderx[i]-this.getborderx[i-1];
	   }
	   for (var i=1; i<this.getbordery.length; i++){
	      this.bordery[i]=this.getbordery[i]-this.getbordery[i-1];
	   }

	   this.strx='';
	   this.stry='';

	   this.strx = this.borderx.join('px ');
	   this.stry = this.bordery.join('px ');

	   this.strx.substr(0,this.strx.length-2);
	   this.stry.substr(0,this.stry.length-2);

	   this.strx=this.strx+";";
	   this.stry=this.stry+";";

	}
	
	console.log(this.getborderx, this.borderx, this.strx, this.stry);
	
	this.renderer.setStyle(this.animateThis.nativeElement, 'display', 'grid');
	this.renderer.setStyle(this.animateThis.nativeElement, 'grid-template-columns', this.strx);
	this.renderer.setStyle(this.animateThis.nativeElement, 'grid-auto-rows', this.stry);

	for (var i=0; i<this.getborderx.length*this.getbordery.length; i++){
		const newdiv = this.renderer.createElement('div');
    	this.renderer.appendChild(this.animateThis.nativeElement, newdiv);
    	this.renderer.setStyle(newdiv, 'border', '1px dashed green');
    	console.log(this.animateThis.nativeElement);
    	console.log(newdiv);
	}
};

    
constructor(private eRef: ElementRef, private renderer: Renderer2, private ref: ChangeDetectorRef ) {
  }

}
