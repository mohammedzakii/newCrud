import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IDefaultResult, UserDetails } from './user-details.modal';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  url: string = environment.apiBaseUrl + '/Customer';
  formData: UserDetails = new UserDetails();
  formSumbited: boolean = false;

  constructor(private http: HttpClient) { }


  // getAllUsers() {
  //   this.http.get(this.url + '/GetAllCustomers').subscribe({
  //     next: res => {
  //       console.log("result",res)
  //     },
  //     error: err => { console.log(err) }
  //   })
  // }

  getAllUsers(): Observable<IDefaultResult> {
    const Url = this.url + '/GetAllCustomers';
    return this.http.get<any>(Url);
  }


  addnewUser() {
    var Url = this.url + '/addNewCustomer';
    return this.http.post(Url, this.formData)
  }

  UpdateUser() {
    var Url = this.url + '/UpdateCustomer';
    return this.http.post(Url, this.formData)
  }

  deleteUser(id : number) {
    var Url = this.url + '/DeleteCustomer?Id=' + id;
    return this.http.delete(Url)
  }


  
  resetForm(form: NgForm) {
    form.form.reset();
    this.formSumbited = false;
  }
}
