import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColer]'
})
export class ChangeColerDirective {


  constructor(private tmpr: TemplateRef<any>, private vic: ViewContainerRef ){
  }
  @Input() set appChangeColer(condition:string){
    if(condition){
      this.vic.createEmbeddedView(this.tmpr);
    }else{
      this.vic.clear();
    }
  }
}
