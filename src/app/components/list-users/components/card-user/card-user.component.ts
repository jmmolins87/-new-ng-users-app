import { Component } from '@angular/core';

import { CardUser } from './interface/card-user.interface';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {

  public img: CardUser = {
    name: 'User',
    url: 'https://cdn-icons-png.flaticon.com/512/21/21104.png'
  };
}
