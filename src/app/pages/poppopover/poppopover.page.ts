import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-poppopover',
  templateUrl: './poppopover.page.html',
  styleUrls: ['./poppopover.page.scss'],
})
export class PoppopoverPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async mostrarPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    const {data} = await popover.onWillDismiss();
    console.log(data);

  }

}
