import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) list: IonList;

  constructor(
    private service: DataService
  ) { 
    
  }

  ngOnInit() {
    this.usuarios = this.service.obtenerUsuarios();
  }

  favorite(usuario: any){
    console.log(usuario);
    this.list.closeSlidingItems();
  }

  share(usuario: any){
    console.log(usuario);
    this.list.closeSlidingItems();
  }

  delete(usuario: any){
    console.log('Usuario eliminado: ' + usuario.name);
    this.list.closeSlidingItems();
  }

}
