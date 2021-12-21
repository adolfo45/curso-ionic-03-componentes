import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeck',
  templateUrl: './ckeck.page.html',
  styleUrls: ['./ckeck.page.scss'],
})
export class CkeckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(item){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
