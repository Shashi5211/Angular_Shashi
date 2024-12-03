import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  
  public GetAdd(num1:number,num2:number)
  {
    
    return  num1+num2
    
  }

  public GetSUB(num1:number,num2:number)
  {
    
    return  num1-num2
    
  }
}
