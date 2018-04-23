import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from "@ngx-translate/core";
import {IonicStorageModule} from "@ionic/storage";
import {HetznerAppModule} from "../../../modules/hetzner-app/hetzner-app.module";
import {NgxQRCodeModule} from "@lkdevelopment/ngx-qrcode/dist";
import {AccountListPage} from "./list/account-list";
import {addAccountModal} from "./add/addAccount";
import {HetznerRobotDataModule} from "../../../modules/hetzner-robot-data/hetzner-robot-data.module";
import {HetznerRobotApiModule} from "../../../modules/hetzner-robot-api/hetzner-robot-api.module";

@NgModule({
  declarations: [
    AccountListPage,
    addAccountModal
  ],
  imports: [
    IonicPageModule,
    TranslateModule,
    HetznerAppModule,
    HetznerRobotDataModule,
    HetznerRobotApiModule,
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