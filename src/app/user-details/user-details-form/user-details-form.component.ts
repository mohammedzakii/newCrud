import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetails } from 'src/app/shared/user-details.modal';
import { UserDetailsService } from 'src/app/shared/user-details.service';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styles: [
  ]
})
export class UserDetailsFormComponent implements OnInit {


  constructor(public service: UserDetailsService) { }
  //@Input() UserData: UserDetails = {} as UserDetails;

  submitForm(myForm: NgForm) {
    this.service.formSumbited = true;
    console.log(myForm)


    if (myForm.valid) {

      if (this.service.formData.id == 0) {
        this.add(myForm)
      } else {
        this.update(myForm)
      }



    } else {

    }
  }
  ngOnInit(): void {
    //console.log("ssssssss",this.UserData)
  }

  add(myForm: NgForm) {
    this.service.addnewUser().subscribe({
      next: res => {
        console.log(res)
        this.service.resetForm(myForm)
        window.location.reload();

      }
      , error: err => { 
        console.log("hello")
        console.log(err.error.errors)
       }
    })
  }

  update(myForm: NgForm) {
    this.service.UpdateUser().subscribe({
      next: res => {
        console.log(res)
        this.service.resetForm(myForm)
        window.location.reload();

      }
      , error: err => { console.log(err) }
    })
  }

}
