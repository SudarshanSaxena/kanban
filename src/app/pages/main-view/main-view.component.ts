import { Component, QueryList, ViewChildren } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/models/board.model';
import { Column } from 'src/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  standalone: false
})
export class MainViewComponent {
  @ViewChildren(CdkDropList) dropListRefs!: QueryList<CdkDropList>;
  dropLists: CdkDropList[] = [];

  ngAfterViewInit() {
    // Collect all drop lists after view initialization
    this.dropLists = this.dropListRefs.toArray();
  }


  board: Board = new Board('Test Board', [
    new Column('IDEAS', ['one', 'two', 'three']),
    new Column('TODO', ['one', 'two', 'three']),
    new Column('IN Progress', ['one', 'two', 'three']),
    new Column('REVIEW', ['one', 'two', 'three']),
    new Column('DONE', ['one', 'two', 'three'])
  ])


  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
