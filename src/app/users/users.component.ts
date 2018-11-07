import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Object;
  userdetails: Object;
  useraddress: Object;
  companyDetails: Object;

  
  eachuserdata(user) {
    // event.preventDefault();
    console.log("userdetails", this.users);
    const userId=user
    console.log("userID",userId)
    
    this.data.getUser(userId).subscribe(

      data => {
        this.userdetails = data;
        console.log("datavalues",data);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  constructor(private data: DataService) {
  }
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {
        console.log("data", data)
        this.users = data
      },
      err => {
        console.log("Error occured");
      }
    );
  }


}
