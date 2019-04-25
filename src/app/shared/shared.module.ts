import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaLogoComponent } from './logo.component';
import { RaMessagePanelComponent } from './message-panel/message-panel.component';
import { RaOverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';
import { RaAngularMaterialModule } from '../angular-material.module';
import { RaUserPhotoComponent } from './user-photo/user-photo.component';

@NgModule({
  declarations: [RaLogoComponent, RaMessagePanelComponent, RaOverlaySpinnerComponent, RaUserPhotoComponent],
  imports: [
    CommonModule,
    RaAngularMaterialModule
  ],
  exports: [RaLogoComponent, RaMessagePanelComponent, RaOverlaySpinnerComponent, RaUserPhotoComponent]
})
export class SharedModule { }
