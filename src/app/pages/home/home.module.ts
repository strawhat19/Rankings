import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomePageRoutingModule } from './home-routing.module';
import { KanbanBoardComponent } from 'src/app/components/boards/kanban-board/kanban-board.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    DragDropModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, KanbanBoardComponent]
})

export class HomePageModule {

}
