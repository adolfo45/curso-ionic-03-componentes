import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  filtro: string = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.obtenerAlbums()
    .subscribe(result => {
      this.albumes = result;
      console.log(result);
    });
  }

  onSearchChange( event ){
    this.filtro = event.target.value;
    console.log( event );
  }

}
