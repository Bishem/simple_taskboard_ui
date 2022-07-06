import {Injectable} from '@angular/core';
import {ApiService} from './core/index';
import {State} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private path = '/state';

  constructor(
    private apiService: ApiService
  ) {
  }

  getState(id: number): Promise<State> {
    return this.apiService.get<State>(`${this.path}/${id}`);
  }

  getStates(): Promise<State[]> {
    return this.apiService.getList<State>(`${this.path}`);
  }
}
