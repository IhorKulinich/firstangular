import { Component, ElementRef, AfterViewInit, ViewChild,  Input, QueryList } from '@angular/core';

@Component({
  selector: 'golden3',
  template: `<div #el3>
  <div style="border: 1px dashed lightgrey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
</div> 
`,

})

export class FourthComponent implements AfterViewInit{
  @ViewChild('el3') div!:ElementRef;
ngAfterViewInit(){
	this.div.nativeElement.setAttribute('style','margin: 0; position: fixed; display: grid; height:'+ (window.innerHeight-30)+'px; width:'+ (window.innerWidth-30)+'px; grid-template-columns:'+ (window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px  '+(window.innerHeight*3/13-10)+'px '+ (window.innerHeight*5/13-100)+'px; grid-auto-rows:'+(window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px ; margin-left: 0px;');
}


}
