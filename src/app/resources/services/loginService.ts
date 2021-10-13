import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/config/API_CONFIG';
import { CredenciaisDTO } from '../models/CredenciaisDTO';
import { LocalUser } from '../models/localUser';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(creds: CredenciaisDTO): Observable<LocalUser>{
      return this.httpClient.post<LocalUser>
      (`${API_CONFIG.baseUrl}/login`, 
      creds
      );
    
  }
}