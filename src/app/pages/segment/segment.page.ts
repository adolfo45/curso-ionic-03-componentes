import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  listaHeroes: Observable<any[]>;
  segmento: string = 'Todos';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.listaHeroes = this.dataService.obtenerHeroes();
  }

  segmentChanged( event ){
    //console.log( event.detail.value );

    if(event.detail.value == 'Todos'){
      return this.segmento = '';
    }

    this.segmento = event.detail.value;
  }

}
