import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from "@ngx-translate/core";
import {IonicStorageModule} from "@ionic/storage";
import {HetznerAppModule} from "../../../modules/hetzner-app/hetzner-app.module";
import {HetznerCloudDataModule} from "../../../modules/hetzner-cloud-data/hetzner-cloud-data.module";
import {NgxQRCodeModule} from "@lkdevelopment/ngx-qrcode/dist";
import {AccountListPage} from "./list/account-list";
import {addAccountModal} from "./add/addAccount";

@NgModule({
  declarations: [
    AccountListPage,
    addAccountModal
  ],
  imports: [
    IonicPageModule,
    TranslateModule,
    HetznerAppModule,
    HetznerCloudDataModule,
    IonicStorageModule,
    NgxQRCodeModule
  ],
  entryComponents: [
    AccountListPage,
    addAccountModal
  ]
})
export class AccountPagesModule {
}