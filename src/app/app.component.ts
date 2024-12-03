import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

// Define ToDoItem interface
export interface ToDoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: ToDoItem[] = []; // List of tasks
  newTask: string = ''; // New task input field

  // Add a new task to the list
  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: ToDoItem = {
        id: Date.now(), // Unique ID for the task
        task: this.newTask,
        completed: false, // Default to incomplete
      };

      this.todoList.push(newTodoItem);
      this.newTask = ''; // Clear input field
    }
  }

  // Toggle task completion
  toggleComplete(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed; // Toggle completion
  }

  // Delete a task
  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id); // Remove task by ID
  }
}
