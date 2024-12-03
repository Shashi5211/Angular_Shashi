import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArithmaticService } from '../arithmatic.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
 {
 public No1=20
 public No2=10
    

 public Demo:number=0

 public Demo1:number=0

    public constructor(public addobj:ArithmaticService)
    { 
    
       this. Demo=addobj.GetAdd(this.No1,this.No2)
      
       this.Demo1=addobj.GetSUB(this.No1,this.No2)
    
      
    }

} 

 
