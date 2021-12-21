import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  autores: string[] = ['Carlos Castaneda', 'Wayne Dyer', 'Stephen Covey', 'Robert Kiyosaki']
  reordenar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  reordenarAutor( event: any ){

    const elemento = this.autores.splice(event.detail.from, 1)[0];
    this.autores.splice(event.detail.to,0, elemento);

    console.log( this.autores );

    event.detail.complete();
  }

}
