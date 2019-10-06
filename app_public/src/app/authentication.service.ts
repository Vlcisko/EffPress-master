import { PagesDataService } from './pages-data.service';
import { BROWSER_STORAGE } from './storage';
import { Injectable, Inject } from '@angular/core';
import { User } from './user';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private pagesDataService: PagesDataService
    ){ }

  public getToken(): string {
    return this.storage.getItem('effpress-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('effpress-token', token);
  }

  public login(user: User): Promise<any> {
    return this.pagesDataService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('effpress-token');
  }

  public register(user: User): Promise<any> {
    return this.pagesDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}
