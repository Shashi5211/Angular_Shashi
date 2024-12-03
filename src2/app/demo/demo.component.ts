import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
 {
    public No1=6

   public Demo:Boolean
    public constructor(public noobj:NumberService)
    {
      this.Demo=noobj.GetPrime(this.No1)
    }
}
