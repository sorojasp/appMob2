import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {MyChoiceComponent} from './../components/my-choice/my-choice.component';
import { PopoverController } from '@ionic/angular';
import {CheckboxComponent} from '../components/checkbox/checkbox.component'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})// es decorador indica un controlador
export class Tab2Page {


  public title:string ="Contratistas"


  public year:any;
  private ceSelected:boolean=true;

  constructor(
    private router:Router,
    public modalController: ModalController,
    public popoverController: PopoverController
  ) {}


  public getDate(){
    console.log(this.year)
  }

  public goLogin(){
    this.router.navigate(['../login'])

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: MyChoiceComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CheckboxComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  public catchTi(e){
    this.ceSelected=true;
    console.log("Ti selected")
  }

  public async catchCe(e){

    if(this.ceSelected){
      this.presentPopover(e)
      this.ceSelected=false
    }
  
      
     
    }
    
  

}
