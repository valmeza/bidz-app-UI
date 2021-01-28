import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url = 'https://bidz-app-crud.herokuapp.com/api/v1';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`${this.url}/items`);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/items/${id}`);
  }
}
