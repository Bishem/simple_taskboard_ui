import {Injectable} from '@angular/core';
import {ApiService, Dictionary} from './core/index';
import {Task} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private path = '/task';

  constructor(
    private apiService: ApiService
  ) {
  }

  getTask(id: number): Promise<Task> {
    return this.apiService.get<Task>(`${this.path}/${id}`);
  }

  getTasks(): Promise<Task[]> {
    return this.apiService.getList<Task>(`${this.path}`);
  }

  createTask(task: Task): Promise<Task> {
    return this.apiService.post<Task>(`${this.path}`, task);
  }

  deleteTask(id: number): Promise<Dictionary> {
    return this.apiService.delete<Task>(`${this.path}/${id}`);
  }

  updateTask(id: number, task: Task): Promise<Dictionary> {
    return this.apiService.put<Task>(`${this.path}`, task);
  }
}
