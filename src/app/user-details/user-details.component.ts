import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service';
import { UserDetails } from '../shared/user-details.modal';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  users: UserDetails[] = [];
  formData: UserDetails = new UserDetails();
  constructor(private service: UserDetailsService,
  ) { }

  ngOnInit(): void {
    console.log("start")
    this.GetAllUsers();
  }



  GetAllUsers() {

    this.service.getAllUsers().subscribe((response) => {
      console.log(response)
      if (response.success === false) {
      }
      console.log("users", response.data)
      this.users = response.data
      console.log("users", this.users)
    },
      (err: HttpErrorResponse) => {

        // this.msg.info(
        //   "Unable To Access Server, Please refresh the page and try again"

      }
    );
  }


  popData(row: UserDetails) {
    console.log(row)
    this.service.formData = Object.assign({}, row);
  }

  Delete(row: UserDetails) {
    console.log(row.id)
    this.service.deleteUser(row.id).subscribe({
      next: res => {
        console.log(res)
        window.location.reload();
      }
      , error: err => { console.log(err) }
    })
  }

}
