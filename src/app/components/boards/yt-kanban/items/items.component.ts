import { Component, Input } from '@angular/core';
import { Column } from 'src/app/database/models/models.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  standalone: false,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss', '../yt-kanban.component.scss']
})

export class ItemsComponent {
  @Input() colIndex: number = 0;
  @Input() column: Column = new Column({});
  constructor(
    // Empty
  ) {
    // Empty
  }

  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onlyAcceptItems = (drag: CdkDrag, drop: CdkDropList) => drag.data?.type === `item`;
}
