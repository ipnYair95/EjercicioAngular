import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import { AvatarComponent } from './toolbar/avatar/avatar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    ToolbarComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressBarModule

  ],
  exports:[
    ToolbarComponent
  ]
})
export class UtilsModule { }
