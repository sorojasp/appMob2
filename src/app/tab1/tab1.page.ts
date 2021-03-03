import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  public subTitle:string="Justicia Especial para la Paz";
  public title:string="JEP"
  public description:string="Comisión que busca aclarar los temas con conflicto en colombia. La idea que acudan el sector militar, grupos al margen de la ley y también los empresarios que patrocinaron grupos armados y posteriormente compraron las tierras a los campesinos depojados."
  public urlImg:string="https://www.semana.com/resizer/WolCrgJ9DWY-x5vGVG7qsWZJa1k=/960x540/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/semana/OGOOWQLCFFDOVK2F3TYUYHYRLU.jpg";


  public capturaEvento(e){
    console.log(e);
  }

}
