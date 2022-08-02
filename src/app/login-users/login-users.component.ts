import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:123, firstname: "Karthik", lastname: "AK", email:"ak@gmail.com"},
    {id:234, firstname: "Yashwanth", lastname: "Dayakar", email:"yashwanth@gmail.com"},
    {id:345, firstname: "Bhanu", lastname: "Prakash", email:"bhanu@gmail.com"}
  ];

  deleteUsers()
  {
    alert("Successfully Deleted!");
  }
}
