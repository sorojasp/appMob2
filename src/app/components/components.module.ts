import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxComponent} from './checkbox/checkbox.component'
import {MyChoiceComponent} from './my-choice/my-choice.component'

@NgModule({
  declarations: [CheckboxComponent, MyChoiceComponent],// que el componente pertenece al módulo
  
  imports: [

    CommonModule //aquí se colocan los módulos que se importan

  ],exports: [CheckboxComponent, MyChoiceComponent],//lo quiere usar en otros lados de la aplicación
  
  providers: []

})
export class ComponentsModule { }
