import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:3005/usrers"
  constructor(private client: HttpClient) { }

  getAllUsers() {
    return this.client.get(this.baseurl);
  }

  add(user: any) {
    return this.client.post(`${this.baseurl}`, user);
  }
  edit(userId: any, user: any) {
    return this.client.put(`${this.baseurl}/${userId}`, user);
  }


  delete(userId: any) {
    return this.client.delete(`${this.baseurl}/${userId}`);
  }
  getUser(userId: any) {
    return this.client.get(`${this.baseurl}/${userId}`);
  }
}
