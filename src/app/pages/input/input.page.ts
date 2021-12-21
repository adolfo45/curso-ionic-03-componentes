import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Adolfo';

  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit( event ){
    console.log( this.usuario );
  }

}
