import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input()
  public data: any = '';

  ngOnInit() {
    // console.log( this.data )
  }
}
