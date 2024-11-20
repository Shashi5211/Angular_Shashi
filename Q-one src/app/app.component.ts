import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Q-Four';
  public Upper:string="";
  
  
  public UpperEvent()
  {
    this.Upper="Marvellous infosystem";
  }

 
  
 public Lower:string="";

  public LowerEvent()
  {
    this.Lower="Marvellous infosystem";
  }

 
}
