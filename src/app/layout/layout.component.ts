import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @Input()
  title: string = 'Routing and Services';

  constructor( private _router: Router ) {}

  goDashboard(): void {
    this._router.navigate(['/dashboard']);
  }
}
