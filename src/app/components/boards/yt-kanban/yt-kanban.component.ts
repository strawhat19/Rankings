import { Component } from '@angular/core';
import { Board, Column } from 'src/app/database/models/models.model';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  standalone: false,
  selector: 'app-yt-kanban',
  templateUrl: './yt-kanban.component.html',
  styleUrls: ['./yt-kanban.component.scss']
})

export class YTKanbanComponent {
  toDoBoard: Board = new Board({
    id: `toDoBoard_1`,
    name: `To Do`,
    columns: [
      new Column({
        name: `Ideas`,
        items: [
          `Some random idea`,
          `This is another random idea`,
          `build an awesome application`
        ],
      }),
      new Column({
        name: `Research`,
        items: [
          `Lorem ipsum`,
          `foo`,
          `This was in the 'Research' column`
        ],
      }),
      new Column({
        name: `To Do`,
        items: [
          `Get to work`,
          `Pick up groceries`,
          `Go home`,
          `Fall asleep`
        ],
      }),
      new Column({
        name: `Done`,
        items: [
          `Get up`,
          `Brush teeth`,
          `Take a shower`,
          `Check e-mail`,
          `Walk dog`
        ],
      })
    ]
  });

  activeBoard: Board = this.toDoBoard;

  constructor(
    // Empty
  ) {
    // Empty
  }

  onlyAcceptColumns = (drag: CdkDrag, drop: CdkDropList) => drag.data?.type === `column`;

  ngOnInit() {
    // Empty
  }

  dropColumn(event: CdkDragDrop<Column[]> | any) {
    if (event.previousContainer === event.container) {
      // Reorder columns
      moveItemInArray(
        this.activeBoard.columns as Column[],
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(`Outside Container`);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onlyAcceptItems = (drag: CdkDrag, drop: CdkDropList) => drag.data?.type === `item`;
}
