import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo1';

  constructor(private mySnackBar:MatSnackBar){}

  openSnackBar(x:string,y:string){
    this.mySnackBar.open(x,y, {duration: 2000});
  }

}
