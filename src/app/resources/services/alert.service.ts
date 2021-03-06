import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

public sucess(message: string): void{
  this.showAlert(  message, 'success');
}

public info(message: string): void{
  this.showAlert( message, 'info');
}

public error(message: string,): void{
  this.showAlert( message, 'error');
}

  private showAlert(
   
    message: string, 
    icon: SweetAlertIcon
    ): void {
      Swal.fire(message, icon);
  }
}
