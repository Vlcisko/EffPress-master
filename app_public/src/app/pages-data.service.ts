import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Page } from './page';

import { environment } from '../environments/environment';


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

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}
