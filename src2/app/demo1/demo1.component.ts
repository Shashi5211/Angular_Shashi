import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component
 {
  public No="Marvellous"

  public Demo1

public constructor(public stringobj:StringService)
{
  this.Demo1=stringobj.GetCCount(this.No)
}
}
