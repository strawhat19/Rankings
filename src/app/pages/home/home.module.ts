import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomePageRoutingModule } from './home-routing.module';
import { YTKanbanComponent } from 'src/app/components/boards/yt-kanban/yt-kanban.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    DragDropModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, YTKanbanComponent]
})

export class HomePageModule {

}
