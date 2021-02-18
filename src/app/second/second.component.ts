import { Component, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'golden2',
  template: `<div #el2>
  <div style="border: 1px dashed lightgrey; grid-row-start: 1; grid-row-end: 3; grid-column-start: 1; grid-column-end: 3;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey; grid-row-start: 2; grid-row-end: 4; grid-column-start: 4; grid-column-end: 6;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
<div style="border: 1px dashed grey;"></div>
</div> `,

})

export class SecondComponent implements AfterViewInit{
  @ViewChild('el2') div!:ElementRef;
ngAfterViewInit(){
    this.div.nativeElement.setAttribute('style','margin: 0; position: fixed; display: grid; height:'+ (window.innerHeight-30)+'px; width:'+ (window.innerWidth-30)+'px; grid-template-columns:'+ (window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px ;  grid-auto-rows:'+(window.innerHeight*5/13-10)+'px '+(window.innerHeight*3/13-10)+'px '+(window.innerHeight*5/13-10)+'px ; margin-left: '+((window.innerWidth-window.innerHeight*15/13-window.innerHeight*6/13)/2+25)+'px;');
   
}

}
