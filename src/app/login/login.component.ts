import { Component } from '@angular/core';
import { Dailyreport } from '../dailyreport';
import { DailyreportService } from '../dailyreport.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  actual: Dailyreport = new Dailyreport();

  constructor(public service: DailyreportService, public auth: AuthService, private router: Router){

  }

  login(){
    this.auth.GoogleAuth();
    
  }
}