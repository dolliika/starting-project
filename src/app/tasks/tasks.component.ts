import { Component, Input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true })
  selectedUserId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)!;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
