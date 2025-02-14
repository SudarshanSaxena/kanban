import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    DragDropModule
  ]
})
export class MainViewModule { }
