import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface KanbanColumn {
  title: string;
  items: string[];
}

@Component({
  standalone: false,
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})

export class KanbanBoardComponent {

  // Our board data
  columns: KanbanColumn[] = [
    {
      title: 'To Do',
      items: ['Buy groceries', 'Pick up laundry', 'Schedule car maintenance']
    },
    {
      title: 'In Progress',
      items: ['Develop new feature', 'Bug fixes']
    },
    {
      title: 'Done',
      items: ['Morning workout', 'Write blog post']
    }
  ];

  /**
   * Handle the drop event from Angular CDK
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Reorder within the same column
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move between different columns
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  /**
   * Add a new item (task) to a specific column
   */
  addItem(columnIndex: number) {
    const newItem = prompt('Enter new task:'); // Or use a nicer input method
    if (newItem) {
      this.columns[columnIndex].items.push(newItem);
    }
  }

  /**
   * Delete an item (task) from a specific column
   */
  deleteItem(columnIndex: number, itemIndex: number) {
    this.columns[columnIndex].items.splice(itemIndex, 1);
  }
}
