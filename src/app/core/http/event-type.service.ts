import {Injectable} from '@angular/core';
import {EventType} from '@app/core/models';
import {ApiService} from './core/index';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {

  private path = '/event-type';

  constructor(
    private apiService: ApiService
  ) {
  }

  getEventType(id: number): Promise<EventType> {
    return this.apiService.get<EventType>(`${this.path}/${id}`);
  }

  getEventTypes(): Promise<EventType[]> {
    return this.apiService.getList<EventType>(`${this.path}`);
  }
}
