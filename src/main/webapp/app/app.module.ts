import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GatewayApplicationSharedModule } from 'app/shared/shared.module';
import { GatewayApplicationCoreModule } from 'app/core/core.module';
import { GatewayApplicationAppRoutingModule } from './app-routing.module';
import { GatewayApplicationHomeModule } from './home/home.module';
import { GatewayApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GatewayApplicationSharedModule,
    GatewayApplicationCoreModule,
    GatewayApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GatewayApplicationEntityModule,
    GatewayApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class GatewayApplicationAppModule {}
