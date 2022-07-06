import {Injectable} from '@angular/core';
import {ApiService} from './core/index';
import {Event} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private path = '/event';

  constructor(
    private apiService: ApiService
  ) {
  }

  getEvent(id: number): Promise<Event> {
    return this.apiService.get<Event>(`${this.path}/${id}`);
  }

  getEvents(): Promise<Event[]> {
    return this.apiService.getList<Event>(`${this.path}`);
  }
}
