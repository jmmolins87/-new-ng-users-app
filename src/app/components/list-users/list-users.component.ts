import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public data: any[] = [];
  public showSpinner: boolean = true;
  
  constructor( private userService: UserService ) { }
  
  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.getUser();
    }, 3000)
  }

  getUser(): void {
    this.userService.getUser().subscribe( data => {
      this.data = data;
      this.showSpinner = false;
    })
  }

}
