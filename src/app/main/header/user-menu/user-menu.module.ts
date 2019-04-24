import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaUserMenuComponent } from './user-menu.component';
import { RaUserMenuNavComponent } from './user-menu-nav/user-menu-nav.component';
import { RaUserMenuUserComponent } from './user-menu-user/user-menu-user.component';
import { OverlayPanelModule } from '../shared/overlay-panel/overlay-panel.module';
import { RaAngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [RaUserMenuComponent, RaUserMenuNavComponent, RaUserMenuUserComponent],
  imports: [
    CommonModule,
    RaAngularMaterialModule,
    OverlayPanelModule
  ],
  exports: [RaUserMenuComponent]
})
export class RaUserMenuModule { }
