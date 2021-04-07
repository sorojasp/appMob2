import { Component } from '@angular/core';
import {SouthParkService} from './../services/SouthPark/south-park.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private southPService:SouthParkService
  ) {}

  public subTitle:string="Justicia Especial para la Páz";
  public title:string="JEP"
  public description:string="Comisión que busca aclarar los temas con conflicto en colombia. La idea que acudan el sector militar, grupos al margen de la ley y también los empresarios que patrocinaron grupos armados y posteriormente compraron las tierras a los campesinos depojados."
  public urlImg:string="https://www.jep.gov.co/images/vertical.png";
  public arrayStr:string[]= ["JEP", "JEPáz"];
  public iconStr:string="paw-outline"
  public styleIcon:string="color:blue; padding-right: 5px; zoom:1.5";
  public characterSP={
    name:"",
    full_name:"",
    urlImage:"https://i.pinimg.com/564x/23/1f/07/231f07731f87e1e6883abae0f8734c53.jpg",
    religion:""
  };


  public changeImg(e){
    console.log(e);
    this.urlImg="https://bolivarense.com/wp-content/uploads/2019/03/JEP.jpeg";
    this.iconStr="megaphone-outline";
    this.styleIcon="color:green; padding-right: 5px; zoom:1.5";
  }

  public getCharacter(e){

    this.southPService.getCharacter(1).subscribe(res=>{
      console.log(res['data'])
      this.characterSP.name=res['data']['name'];
      this.characterSP.full_name=res['data']['full_name'];
      this.characterSP.religion=res['data']['religion'];
      


    }, err=>{
      console.log(err)

    })
    


  }


}
