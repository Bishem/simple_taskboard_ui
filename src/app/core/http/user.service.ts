import {Injectable} from '@angular/core';
import {ApiService, Dictionary} from './core/index';
import {User} from '@app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = '/auth';

  constructor(
    private apiService: ApiService
  ) {
  }

  authMe(): Promise<User> {

    console.log('getting user');

    return this.apiService.get<User>(`${this.path}/me`);
  }

  logIn(userSecret: FormData): Promise<User> {

    console.log('signing in user');

    return this.apiService.post<User>(`${this.path}/log-in`, userSecret);
  }

  signUp(userSecret: FormData): Promise<User> {

    console.log('siging on user');

    return this.apiService.post<User>(`${this.path}/sign-up`, userSecret);
  }

  update(user: User): Promise<Dictionary> {
    return this.apiService.put<User>(`${this.path}`, user);
  }

  signOut(email: string): Promise<Dictionary> {
    return this.apiService.delete<User>(`${this.path}/sign-out`, {email});
  }
}
