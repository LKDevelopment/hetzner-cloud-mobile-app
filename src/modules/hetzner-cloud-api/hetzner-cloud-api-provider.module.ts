import {NgModule} from '@angular/core';
import {ImageApiProvider} from "./image-api/image-api";
import {ServerApiProvider} from "./server-api/server-api";
import {StatusApiProvider} from "./status-api/status-api-provider.service";
import {FloatingIpApiProvider} from "./floating-ip-api/floating-ip-api";
import {ActionsApiProvider} from "./actions-api/actions-api";
import {ServerTypeApiProvider} from "./server-type-api/server-type-api";
import {SshKeyApiProvider} from "./ssh-key-api/ssh-key-api";
import {LocationApiProvider} from "./location-api/location-api";
import {PricesApiProvider} from "./pricing-api/pricing-api";
import {HttpClientModule} from "@angular/common/http";
import {HetznerAppModule} from "../hetzner-app/hetzner-app.module";

/**
 * This module register all available hetzner apis.
 */
@NgModule({
  imports: [HttpClientModule, HetznerAppModule],
  providers: [
    ServerApiProvider,
    ServerTypeApiProvider,
    FloatingIpApiProvider,
    LocationApiProvider,
    ActionsApiProvider,
    ImageApiProvider,
    SshKeyApiProvider,
    StatusApiProvider,
    PricesApiProvider,
  ]
})
export class HetznerCloudApiProviderModule {
}
