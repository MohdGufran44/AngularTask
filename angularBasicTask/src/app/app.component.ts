import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private router:Router, private accountsService: AccountsService){}

  // register(){
  //   this.router.navigate(['/register']);
  // }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
