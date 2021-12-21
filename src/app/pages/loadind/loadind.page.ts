import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadind',
  templateUrl: './loadind.page.html',
  styleUrls: ['./loadind.page.scss'],
})
export class LoadindPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  mostrar(){
    this.presentLoading();

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Espere...'
    });
    await this.loading.present();
  }

}
