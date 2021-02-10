import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public urlImage:string;
  public icon:string
  constructor() {}

  public showPotateRick(){
    this.urlImage="https://cnet4.cbsistatic.com/img/NmTEBvfpz1fFJE3Seik0gjhXT7U=/1200x675/2019/12/11/d573784c-7801-4cc3-9899-9690616a4654/twitter-in-stream-wide-pickle-rick-pringles-rick-and-morty.jpg"

    this.icon="home"
  }

  public showPickleRick(){
    this.urlImage="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/pickle-rick-dave-rjones.jpg"
    this.icon="flame"
 
  }

}
