import {Injectable} from '@angular/core';
import {ApiService} from './core/index';
import {Project} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private path = '/project';

  constructor(
    private apiService: ApiService
  ) {
  }

  getProject(id: number): Promise<Project> {
    return this.apiService.get<Project>(`${this.path}/${id}`);
  }

  getProjects(): Promise<Project[]> {
    return this.apiService.getList<Project>(`${this.path}`);
  }
}
