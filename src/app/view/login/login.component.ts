import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/RequestLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  constructor() { }

  ngOnInit(): void {
    this.requestLogin;
  }

  public doLogin(): void{
    console.log(this.requestLogin)
  }
}
