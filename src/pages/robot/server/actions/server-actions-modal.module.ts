import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {IonicStorageModule} from '@ionic/storage';
import {HetznerAppModule} from '../../../../modules/hetzner-app/hetzner-app.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HetznerAppComponentsModule} from '../../../../components/hetzner-app-components.module';
import {TooltipsModule} from 'ionic-tooltips';
import {HetznerRobotDataModule} from '../../../../modules/hetzner-robot-data/hetzner-robot-data.module';
import {ServerActionsResetModal} from "./reset/server-actions-reset";

@NgModule({
  declarations: [ServerActionsResetModal],
  imports: [
    HetznerAppComponentsModule,
    IonicPageModule,
    TranslateModule,
    HetznerAppModule,
    HetznerRobotDataModule,
    IonicStorageModule,
    BrowserAnimationsModule,
    TooltipsModule,
  ],
  entryComponents: [ServerActionsResetModal,]
})
export class ServerActionsModalModule {
}
