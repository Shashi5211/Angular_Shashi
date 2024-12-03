import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public No1=6

   public Demo:Boolean

   public No="Marvellous"

   public Demo1
    public constructor(public noobj:NumberService ,public stringobj:StringService)
    {
      this.Demo=noobj.GetPrime(this.No1)
      this.Demo1=stringobj.GetCCount(this.No)

}

}
