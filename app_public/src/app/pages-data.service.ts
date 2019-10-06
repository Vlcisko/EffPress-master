import { AuthResponse } from './authresponse';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Page } from './page';


import { environment } from '../environments/environment';
import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = environment.apiBaseUrl;

  public getPageById(pageId: string): Promise<Page> {
    const url: string = `${this.apiBaseUrl}/pages/${pageId}`;
    return this.http
    .get(url)
    .toPromise()
    .then(response => response as Page)
    .catch(this.handleError);
  }

  public getPdfById(pdfId: string): Promise<any> {
    const url: string = `${this.apiBaseUrl}/pdfs/${pdfId}`;
    return this.http
    .get(url)
    .toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  public createPdf(pages: number): Promise<any> {
    const data = {numPages:pages};
    const url: string = `${this.apiBaseUrl}/pdfs`;
    return this.http
      .post(url, data)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError)
  }

}
