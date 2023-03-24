import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  user: User = {}
  users = [{ id: 1, name: 'Sab', age: 30, username: 'Brina' }]
  name = 'Guest'

  constructor() {}

  add(formRef: NgForm) {
    console.log("[debug] SUBMIT METHOD", formRef)
    this.users.push(formRef.value)
  }

  // ADD USERS

  // add(input: HTMLInputElement) {
  //   this.users.push(input.value)
  //   input.value = ''
  //   input.focus()
  // }
}
