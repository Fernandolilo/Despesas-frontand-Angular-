import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/resources/models/CredenciaisDTO';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/loginService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };


  constructor(
    private alertService: AlertService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.creds;
  }

  public doLogin(): void{
    this.loginService.doLogin(this.creds)
    .subscribe(data =>{
      this.router.navigate(['home']);
    },
    httpError => {
      this.alertService.error(httpError.error.message);
      }
    );
  }
}


