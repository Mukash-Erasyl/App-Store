import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';


import { SideBarComponent } from '../childc/side-bar/side-bar.component';
import { Repository } from '../options/repository';

@Component({
  selector: 'app-basel',
  templateUrl: './basel.component.html',
  styleUrls: ['./basel.component.css']
})
export class BaselComponent implements OnInit {

  constructor(private repo: Repository , private router: Router , private auth: AuthenticationService ) {
    this.lFlag = this.repo.logFlag;
   }

  sideFlag : boolean = this.repo.sideBarFlag;

  LastSearching = "Искать...";

  lFlag = false;


  enterExit = () => {
    this.auth.logout();
    this.lFlag = !this.lFlag;

  }

  


  lastSearchFunc = (findS:string) => {
    this.LastSearching = findS;

  }

  sideBarFunc=()=> {
    this.repo.sideBarFlag=!this.repo.sideBarFlag;
    this.sideFlag = this.repo.sideBarFlag;
  }






  ngOnInit(): void {

  }

  



  


}
