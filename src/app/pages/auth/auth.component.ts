import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material-module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
