import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public GetCCount(text:string)
  {
    {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
          if (text[i] === text[i].toUpperCase() && /[A-Z]/.test(text[i])) { 
              count++;
          }
      }
      return count;
  }
  
    
    
   
      
  
  }
}
