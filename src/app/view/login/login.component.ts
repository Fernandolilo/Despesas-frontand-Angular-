import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin;

  constructor(
    private loginService: LoginService, 
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.requestLogin;
  }

  public doLogin(): void{
    this.loginService.doLogin(this.requestLogin)
    .subscribe(data =>{
     this.alertService.info('Funcionalidade não implementada')
    },
    httpError => {
      this.alertService.error(httpError.error.message);
      }
    );
  }
}
