import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {environment} from './../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class SouthParkService {

  public endPoint:string="characters";

  constructor(
    public httpClient: HttpClient
  ) { }

  public getCharacter(id:number){
    return this.httpClient.get(`${environment.urlSouthPark}${this.endPoint}/${id}`);
  }
}
