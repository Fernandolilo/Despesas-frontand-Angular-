import { Injectable } from '@angular/core';
import { LocalUser } from '../models/localUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public localUser: LocalUser | undefined;

 public clear (): void{
   this.localUser =undefined;
 }

 public isAltenticated(): boolean{
   return Boolean(this.localUser?.token)
 }
}
