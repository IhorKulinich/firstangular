import { Component, ElementRef, AfterViewInit, ViewChild,  Input, QueryList } from '@angular/core';

@Component({
  selector: 'golden1',
  template: `<div #el1>
  <div style="border: 1px dashed grey; grid-row-start: 1; grid-row-end: 3;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
</div> 
`,

})

export class ThirdComponent implements AfterViewInit{
  @ViewChild('el1') div!:ElementRef;
ngAfterViewInit(){
	this.div.nativeElement.setAttribute('style','margin: 0; position: fixed; display: grid; height:'+ (window.innerHeight-30)+'px; width:'+ window.innerWidth+'px; grid-template-columns:'+ window.innerHeight+'px '+(window.innerHeight/1.6)+'px; grid-auto-rows:'+(window.innerHeight/1.6-15)+'px '+(window.innerHeight*3/8-15)+'px; margin-left:'+((window.innerWidth-window.innerHeight-window.innerHeight/1.6)/2)+'px;');
}


}
