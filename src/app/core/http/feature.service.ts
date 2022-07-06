import {Injectable} from '@angular/core';
import {ApiService} from './core/index';
import {Feature} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private path = '/feature';

  constructor(
    private apiService: ApiService
  ) {
  }

  getFeature(id: number): Promise<Feature> {
    return this.apiService.get<Feature>(`${this.path}/${id}`);
  }

  getFeatures(): Promise<Feature[]> {
    return this.apiService.getList<Feature>(`${this.path}`);
  }
}
